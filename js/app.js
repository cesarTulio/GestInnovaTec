const App = {
    state: {
        currentRoute: 'dashboard',
        currentWeek: null,
        theme: localStorage.getItem('git01-theme') || 'dark',
        progress: JSON.parse(localStorage.getItem('git01-progress') || '{}'),
        quizResults: JSON.parse(localStorage.getItem('git01-quiz') || '{}'),
        sidebarCollapsed: localStorage.getItem('git01-sidebar') === 'true',
    },

    init() {
        this.applyTheme();
        this.setupSidebar();
        this.renderNavigation();
        this.setupEventListeners();
        this.handleRoute();
        this.updateProgressRing();
    },

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
        const label = document.querySelector('.theme-label');
        if (label) {
            label.textContent = this.state.theme === 'dark' ? 'Modo Oscuro' : 'Modo Claro';
        }
    },

    setupSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (this.state.sidebarCollapsed) {
            sidebar.classList.add('collapsed');
        }
    },

    renderNavigation() {
        const nav = document.getElementById('sidebarNav');
        const isCollapsed = document.getElementById('sidebar').classList.contains('collapsed');
        let html = `
            <div class="nav-section">
                <a href="#dashboard" class="nav-item nav-dashboard ${this.state.currentRoute === 'dashboard' ? 'active' : ''}" data-route="dashboard" title="Dashboard"
                    onclick="if(document.getElementById('sidebar').classList.contains('collapsed')){App.toggleSidebar();}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                    <span>Dashboard</span>
                    <span class="nav-tooltip">Dashboard</span>
                </a>
            </div>
            <div class="nav-section">
                <a href="#diagnostic" class="nav-item nav-diagnostic ${this.state.currentRoute === 'diagnostic' ? 'active' : ''}" data-route="diagnostic" title="Diagnóstico"
                    onclick="if(document.getElementById('sidebar').classList.contains('collapsed')){App.toggleSidebar();}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 012 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 012-2z"/></svg>
                    <span>Diagnóstico Previo</span>
                    <span class="nav-tooltip">Diagnóstico Previo</span>
                </a>
            </div>
        `;

        courseData.units.forEach(unit => {
            const isActive = this.state.currentWeek && unit.weeks.includes(parseInt(this.state.currentWeek));
            const completed = unit.weeks.every(w => this.state.progress[w]?.completed);
            const unitTooltip = isCollapsed ? `<span class="nav-tooltip">U${unit.id}: ${unit.name}</span>` : '';
            html += `
                <div class="nav-section" data-unit="${unit.id}">
                    <div class="nav-section-title" style="cursor:pointer;" onclick="App.toggleUnit(${unit.id})" title="U${unit.id}: ${unit.name}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition:transform 0.2s;${isActive ? 'transform:rotate(90deg);' : ''}"><path d="M9 18l6-6-6-6"/></svg>
                        <span>U${unit.id}: ${unit.name}</span>
                        ${unitTooltip}
                    </div>
                    <div class="nav-weeks ${isActive ? 'expanded' : ''}" id="unit-weeks-${unit.id}">
            `;
            unit.weeks.forEach(weekId => {
                const week = courseData.weeks[weekId];
                const isWeekActive = this.state.currentWeek == weekId;
                const isCompleted = this.state.progress[weekId]?.completed;
                const tooltip = isCollapsed ? `<span class="nav-tooltip">S${weekId}: ${week.title}</span>` : '';
                html += `
                    <a href="#week-${weekId}" class="nav-item nav-week-item ${isWeekActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-route="week-${weekId}" title="S${weekId}: ${week.title}"
                        onclick="if(document.getElementById('sidebar').classList.contains('collapsed')){App.toggleSidebar();}"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>
                        <span>S${weekId}: ${week.title}</span>
                        ${tooltip}
                    </a>
                `;
            });
            html += `</div></div>`;
        });

        nav.innerHTML = html;
    },

    toggleUnit(unitId) {
        const el = document.getElementById(`unit-weeks-${unitId}`);
        const arrow = document.querySelector(`[data-unit="${unitId}"] .nav-section-title svg`);
        if (el.classList.contains('expanded')) {
            el.classList.remove('expanded');
            arrow.style.transform = 'rotate(0deg)';
        } else {
            el.classList.add('expanded');
            arrow.style.transform = 'rotate(90deg)';
        }
    },

    setupEventListeners() {
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('sidebarToggle').addEventListener('click', () => this.toggleSidebar());
        window.addEventListener('hashchange', () => this.handleRoute());

        // Close modal
        document.getElementById('quizModalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('quizModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('quizModal')) this.closeModal();
        });

        // Mobile sidebar toggle
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`;
        mobileToggle.style.cssText = 'position:fixed;top:1rem;left:1rem;z-index:101;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:0.5rem;color:var(--text-primary);display:none;cursor:pointer;';
        mobileToggle.onclick = () => {
            document.getElementById('sidebar').classList.toggle('open');
        };
        document.body.appendChild(mobileToggle);

        const mql = window.matchMedia('(max-width: 1024px)');
        const handleMedia = (e) => {
            mobileToggle.style.display = e.matches ? 'block' : 'none';
            if (!e.matches) {
                document.getElementById('sidebar').classList.remove('open');
            }
        };
        mql.addListener(handleMedia);
        handleMedia(mql);
    },

    toggleTheme() {
        this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('git01-theme', this.state.theme);
        this.applyTheme();
    },

    toggleSidebar() {
        this.state.sidebarCollapsed = !this.state.sidebarCollapsed;
        localStorage.setItem('git01-sidebar', this.state.sidebarCollapsed);
        document.getElementById('sidebar').classList.toggle('collapsed');
    },

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'dashboard';
        this.state.currentRoute = hash;

        if (hash.startsWith('week-')) {
            const weekId = parseInt(hash.replace('week-', ''));
            this.state.currentWeek = weekId;
            this.renderWeek(weekId);
        } else if (hash === 'diagnostic') {
            this.state.currentWeek = null;
            this.renderDiagnostic();
        } else {
            this.state.currentWeek = null;
            this.renderDashboard();
        }

        this.renderNavigation();
        this.updateProgressRing();
        this.renderBadges();
        window.scrollTo(0, 0);

        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');
    },

    renderDashboard() {
        document.getElementById('pageTitle').textContent = 'Dashboard de Aprendizaje';
        document.getElementById('pageSubtitle').textContent = 'Bienvenido a tu espacio de aprendizaje autoguiado';

        const totalWeeks = courseData.info.totalWeeks;
        const completedWeeks = Object.values(this.state.progress).filter(p => p.completed).length;
        const completionRate = Math.round((completedWeeks / totalWeeks) * 100);

        // Calculate unit stats
        const unitStats = courseData.units.map(unit => {
            const weeks = unit.weeks;
            const completed = weeks.filter(w => this.state.progress[w]?.completed).length;
            const pct = Math.round((completed / weeks.length) * 100);
            const quizKey = `quiz-u${unit.id}`;
            const quizScore = this.state.quizResults[quizKey]?.score;
            let status = 'status-fortaleza';
            let statusText = 'Fortaleza';
            if (quizScore === undefined) {
                status = completed === weeks.length ? 'status-aceptable' : 'status-riesgo';
                statusText = completed === weeks.length ? 'Completado' : 'En progreso';
            } else if (quizScore < 3) {
                status = 'status-riesgo';
                statusText = 'En Riesgo';
            } else if (quizScore < 5) {
                status = 'status-aceptable';
                statusText = 'Aceptable';
            }
            return { ...unit, completed, pct, status, statusText, quizScore };
        });

        const body = document.getElementById('contentBody');
        body.innerHTML = `
            <div class="dashboard-grid fade-in">
                <div class="dashboard-card" style="cursor:pointer;" onclick="window.location.hash='diagnostic'">
                    <div class="card-header">
                        <div class="card-icon accent-rose">📋</div>
                        <div class="card-title">Diagnóstico Previo</div>
                    </div>
                    <div class="card-value" style="color:var(--accent-rose);font-size:1.5rem;">Evalúa tu base</div>
                    <div class="card-detail">10 preguntas • 5 minutos</div>
                </div>
                <div class="dashboard-card">
                    <div class="card-header">
                        <div class="card-icon accent-cyan">📚</div>
                        <div class="card-title">Progreso del Curso</div>
                    </div>
                    <div class="card-value" style="color:var(--accent-cyan)">${completionRate}%</div>
                    <div class="card-detail">${completedWeeks} de ${totalWeeks} semanas completadas</div>
                    <div class="card-bar"><div class="card-bar-fill" style="width:${completionRate}%;background:linear-gradient(90deg,var(--accent-cyan),var(--accent-magenta))"></div></div>
                </div>
                <div class="dashboard-card">
                    <div class="card-header">
                        <div class="card-icon accent-magenta">🏆</div>
                        <div class="card-title">Autoevaluaciones</div>
                    </div>
                    <div class="card-value" style="color:var(--accent-magenta)">${Object.keys(this.state.quizResults).length}/4</div>
                    <div class="card-detail">Tests completados</div>
                </div>
                <div class="dashboard-card">
                    <div class="card-header">
                        <div class="card-icon accent-amber">🎯</div>
                        <div class="card-title">Próxima Meta</div>
                    </div>
                    <div class="card-value" style="color:var(--accent-amber);font-size:1.5rem;">${this.getNextWeek()}</div>
                    <div class="card-detail">Continúa tu aprendizaje</div>
                </div>
            </div>

            <h2 style="font-size:1.25rem;font-weight:700;color:var(--text-primary);margin:2rem 0 1rem;">Progreso por Unidad</h2>
            <div class="unit-progress-list fade-in">
                ${unitStats.map(u => `
                    <div class="unit-progress-item" style="cursor:pointer;" onclick="window.location.hash='week-${u.weeks[0]}'">
                        <div class="unit-progress-info">
                            <h4>U${u.id}: ${u.name}</h4>
                            <p>${u.subtitle} • ${u.completed}/${u.weeks.length} semanas</p>
                            <div class="unit-progress-bar-container">
                                <div class="unit-progress-bar-fill" style="width:${u.pct}%;background:linear-gradient(90deg,var(--accent-cyan),var(--accent-magenta))"></div>
                            </div>
                        </div>
                        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.25rem;">
                            <div class="unit-progress-percent">${u.pct}%</div>
                            <span class="status-badge ${u.status}">${u.statusText}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderDiagnostic() {
        const diag = courseData.diagnostic;
        document.getElementById('pageTitle').textContent = diag.title;
        document.getElementById('pageSubtitle').textContent = diag.subtitle;

        const saved = JSON.parse(localStorage.getItem('git01-diagnostic') || 'null');
        const isCompleted = saved && saved.completed;

        let html = `
            <div class="week-header fade-in">
                <div class="week-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 012 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 012-2z"/></svg>
                    Evaluación de Saberes Previos
                </div>
                <h1 class="week-title">${diag.title}</h1>
                <p class="week-objective">${diag.description}</p>
            </div>
        `;

        if (isCompleted) {
            const pct = Math.round((saved.correct / saved.total) * 100);
            let level, color, tip;
            if (pct >= 80) { level = 'Alto'; color = 'var(--accent-green)'; tip = 'Tienes una base sólida. Puedes avanzar con confianza al curso y profundizar en los casos avanzados.'; }
            else if (pct >= 50) { level = 'Intermedio'; color = 'var(--accent-amber)'; tip = 'Tienes conocimientos previos, pero algunos conceptos clave necesitan refuerzo. Revisa las semanas de mayor dificultad.'; }
            else { level = 'Inicial'; color = 'var(--accent-rose)'; tip = 'Es recomendable reforzar los conceptos básicos antes de profundizar. Dedica tiempo extra a las semanas de conceptos clave.'; }

            html += `
                <div class="content-section fade-in">
                    <div class="dashboard-card" style="text-align:center;padding:2.5rem;">
                        <div style="font-size:3rem;margin-bottom:1rem;">📊</div>
                        <div class="card-value" style="color:${color};font-size:2.5rem;font-weight:800;">${saved.correct} / ${saved.total}</div>
                        <div style="font-size:1.1rem;font-weight:600;color:var(--text-primary);margin:0.5rem 0;">Nivel de Conocimiento: ${level}</div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;max-width:500px;margin:0 auto;line-height:1.6;">${tip}</p>
                        <div style="margin-top:1.5rem;">
                            <button class="btn btn-secondary" onclick="App.resetDiagnostic()">Reintentar Diagnóstico</button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div id="diagnostic-container" class="content-section fade-in">
                    <div id="diagnostic-questions"></div>
                </div>
            `;
        }

        document.getElementById('contentBody').innerHTML = html;

        if (!isCompleted) {
            this.renderDiagnosticQuestion(0);
        }
    },

    renderDiagnosticQuestion(idx) {
        const diag = courseData.diagnostic;
        const q = diag.questions[idx];
        const total = diag.questions.length;
        const progress = ((idx + 1) / total) * 100;
        const answers = this.state.diagnosticAnswers || {};
        const selected = answers[q.id];

        let html = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
                    <span class="quiz-progress-text">${idx + 1} / ${total}</span>
                </div>

                <div class="question-container">
                    <div class="question-text">${q.text}</div>

                    <div class="options-container">
                        ${q.options.map((opt, optIdx) => `
                            <button class="option-btn ${selected === optIdx ? 'selected' : ''}" onclick="App.selectDiagnosticOption(${idx}, ${optIdx})">
                                <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="quiz-actions">
                    ${idx > 0 ? `<button class="btn btn-secondary" onclick="App.prevDiagnosticQuestion()">← Anterior</button>` : '<div></div>'}
                    ${selected !== undefined ? `<button class="btn btn-primary" onclick="App.nextDiagnosticQuestion()">${idx < total - 1 ? 'Siguiente →' : 'Ver Resultados'}</button>` : '<div></div>'}
                </div>
            </div>
        `;

        document.getElementById('diagnostic-questions').innerHTML = html;
    },

    selectDiagnosticOption(questionIdx, optionIdx) {
        if (!this.state.diagnosticAnswers) this.state.diagnosticAnswers = {};
        const q = courseData.diagnostic.questions[questionIdx];
        this.state.diagnosticAnswers[q.id] = optionIdx;
        this.renderDiagnosticQuestion(questionIdx);
    },

    nextDiagnosticQuestion() {
        const diag = courseData.diagnostic;
        const currentIdx = Object.keys(this.state.diagnosticAnswers || {}).length - 1;
        if (currentIdx < diag.questions.length - 1) {
            this.renderDiagnosticQuestion(currentIdx + 1);
        } else {
            this.finishDiagnostic();
        }
    },

    prevDiagnosticQuestion() {
        const currentIdx = Object.keys(this.state.diagnosticAnswers || {}).length - 1;
        if (currentIdx > 0) {
            this.renderDiagnosticQuestion(currentIdx - 1);
        }
    },

    finishDiagnostic() {
        const diag = courseData.diagnostic;
        let correct = 0;
        diag.questions.forEach(q => {
            if (this.state.diagnosticAnswers[q.id] === q.correct) correct++;
        });

        const result = {
            completed: true,
            correct: correct,
            total: diag.questions.length,
            answers: this.state.diagnosticAnswers,
            date: new Date().toISOString()
        };
        localStorage.setItem('git01-diagnostic', JSON.stringify(result));
        this.state.diagnosticAnswers = {};
        this.renderDiagnostic();
    },

    resetDiagnostic() {
        localStorage.removeItem('git01-diagnostic');
        this.state.diagnosticAnswers = {};
        this.renderDiagnostic();
    },

    getNextWeek() {
        for (let i = 1; i <= 16; i++) {
            if (!this.state.progress[i]?.completed) {
                return `Semana ${i}`;
            }
        }
        return '¡Curso completado!';
    },

    renderWeek(weekId) {
        const week = courseData.weeks[weekId];
        if (!week) return;

        document.getElementById('pageTitle').textContent = week.title;
        document.getElementById('pageSubtitle').textContent = week.objective;

        const unit = courseData.units.find(u => u.id === week.unit);
        const isLastWeekOfUnit = unit.weeks[unit.weeks.length - 1] === weekId;
        const isCompleted = this.state.progress[weekId]?.completed;

        let html = `
            <div class="week-header fade-in">
                <div class="week-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Unidad ${week.unit} • Semana ${week.id}
                </div>
                <h1 class="week-title">${week.title}</h1>
                <p class="week-objective">${week.objective}</p>
            </div>
        `;

        // Theory sections
        if (week.theory) {
            week.theory.forEach((section, idx) => {
                html += `
                    <div class="content-section fade-in" style="animation-delay:${idx * 0.1}s">
                        <h3 class="section-title"><span class="icon">📖</span> ${section.title}</h3>
                        <div class="theory-card">
                            ${section.content}
                        </div>
                    </div>
                `;
            });
        }

        // Case Study
        if (week.caseStudy) {
            html += `
                <div class="content-section fade-in">
                    <h3 class="section-title"><span class="icon">💼</span> Caso Real de Negocio</h3>
                    <div class="case-card">
                        <div class="case-header">
                            <span class="case-badge">Caso de Estudio</span>
                        </div>
                        <h4 class="case-title">${week.caseStudy.title}</h4>
                        <p class="case-content">${week.caseStudy.summary}</p>
                        <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border-color);">
                            <p style="font-weight:600;font-size:0.85rem;color:var(--text-primary);margin-bottom:0.5rem;">🤔 Preguntas de reflexión:</p>
                            <ul style="list-style:none;padding:0;">
                                ${week.caseStudy.questions.map(q => `<li style="padding:0.4rem 0;color:var(--text-secondary);font-size:0.85rem;">• ${q}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        // Lab
        if (week.lab) {
            html += `
                <div class="content-section fade-in">
                    <h3 class="section-title"><span class="icon">🧪</span> ${week.lab.title}</h3>
                    <div class="lab-card">
                        <div class="lab-header">
                            <span class="lab-badge">Laboratorio Práctico</span>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem;">${week.lab.description}</p>
            `;

            if (week.lab.interactiveType === 'drag-drop' && week.lab.items) {
                html += this.renderDragDropLab(week.lab);
            } else if (week.lab.interactiveType === 'lean-canvas') {
                html += this.renderLeanCanvas(week.lab.canvasTitle || 'Lean Canvas');
            } else if (week.lab.interactiveType === 'boolean-builder') {
                html += this.renderBooleanBuilder();
            } else if (week.lab.interactiveType === 'checklist-builder') {
                html += this.renderChecklistBuilder(week.lab.instructions || []);
            } else if (week.lab.interactiveType === 's-curve') {
                html += this.renderSCurveLab();
            } else if (week.lab.type === 'quiz') {
                html += `
                    <div style="text-align:center;padding:2rem;">
                        <div style="font-size:3rem;margin-bottom:1rem;">📝</div>
                        <p style="color:var(--text-secondary);font-size:1rem;margin-bottom:1.5rem;">${week.lab.description}</p>
                        <button class="btn btn-primary" onclick="App.startQuiz('${week.lab.quizId}')">
                            Iniciar Autoevaluación
                        </button>
                    </div>
                `;
            } else if (week.lab.instructions) {
                html += `
                    <div style="background:var(--bg-tertiary);border-radius:var(--radius-md);padding:1.25rem;">
                        <p style="font-weight:600;font-size:0.85rem;color:var(--text-primary);margin-bottom:0.75rem;">📋 Instrucciones:</p>
                        <ol style="color:var(--text-secondary);font-size:0.85rem;line-height:1.8;padding-left:1.25rem;">
                            ${week.lab.instructions.map(inst => `<li>${inst}</li>`).join('')}
                        </ol>
                    </div>
                `;
            }

            html += `
                    </div>
                </div>
            `;
        }

        // Checklist
        if (week.checklist) {
            html += `
                <div class="content-section fade-in">
                    <h3 class="section-title"><span class="icon">✅</span> Checklist de Progreso</h3>
                    <div class="theory-card">
                        <ul class="checklist">
                            ${week.checklist.map((item, idx) => `
                                <li class="checklist-item">
                                    <div class="checklist-checkbox ${this.state.progress[weekId]?.checks?.includes(idx) ? 'checked' : ''}" onclick="App.toggleCheck(${weekId}, ${idx})">
                                        ${this.state.progress[weekId]?.checks?.includes(idx) ? '✓' : ''}
                                    </div>
                                    <span class="checklist-text">${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div style="margin-top:1.5rem;text-align:center;">
                            <button class="btn ${isCompleted ? 'btn-success' : 'btn-primary'}" onclick="App.completeWeek(${weekId})">
                                ${isCompleted ? '✓ Semana Completada' : 'Marcar Semana como Completada'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Assignment
        if (week.assignment) {
            const typeLabel = week.assignment.type === 'investigacion' ? 'Investigación' : week.assignment.type === 'presentacion' ? 'Presentación' : week.assignment.type === 'video' ? 'Video' : 'Trabajo Práctico';
            const typeEmoji = week.assignment.type === 'investigacion' ? '🔍' : week.assignment.type === 'presentacion' ? '📊' : week.assignment.type === 'video' ? '🎬' : '📝';
            html += `
                <div class="content-section fade-in">
                    <h3 class="section-title"><span class="icon">${typeEmoji}</span> Trabajo a Realizar: ${week.assignment.title}</h3>
                    <div class="assignment-card" style="background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.5rem;margin-top:1rem;">
                        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
                            <span style="display:inline-block;background:var(--accent-magenta);color:#fff;font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:0.35rem 0.75rem;border-radius:99px;">${typeLabel}</span>
                            <span style="font-size:0.85rem;color:var(--text-muted);">Entrega: ${week.assignment.deadline}</span>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem;">${week.assignment.description}</p>
                        <div style="background:var(--bg-card);border-radius:var(--radius-sm);padding:1rem;margin-bottom:1rem;">
                            <p style="font-weight:600;font-size:0.85rem;color:var(--text-primary);margin-bottom:0.5rem;">📋 Entregables:</p>
                            <ul style="list-style:none;padding:0;">
                                ${week.assignment.deliverables.map(d => `<li style="padding:0.3rem 0;color:var(--text-secondary);font-size:0.85rem;line-height:1.5;">• ${d}</li>`).join('')}
                            </ul>
                        </div>
                        <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                            <span>Formato: ${week.assignment.format}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Resources
        if (week.resources) {
            html += `
                <div class="content-section fade-in">
                    <h3 class="section-title"><span class="icon">📚</span> Recursos y Herramientas</h3>
                    <div class="resource-card" style="border-left:4px solid var(--accent-blue);">
                        <ul style="list-style:none;padding:0;">
                            ${week.resources.map(r => `
                                <li style="padding:0.5rem 0;display:flex;align-items:center;gap:0.5rem;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                                    <a href="${r.url}" target="_blank" rel="noopener" style="color:var(--accent-blue);text-decoration:none;font-size:0.9rem;">${r.title}</a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }

        // References (only on last week of unit)
        if (week.hasReferences && courseData.references[week.unit]) {
            html += `
                <div class="content-section fade-in">
                    <h3 class="section-title"><span class="icon">📖</span> Referencias Bibliográficas (APA 7ª ed.)</h3>
                    <div class="references-section">
                        ${courseData.references[week.unit].map(ref => `
                            <div class="reference-item">${ref}</div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        document.getElementById('contentBody').innerHTML = html;

        // Post-render interactive setups
        setTimeout(() => {
            if (week.lab?.interactiveType === 'ansoff') this.setupAnsoffInteractive();
            if (week.lab?.interactiveType === 'hype-cycle') this.setupHypeCycleInteractive();
        }, 100);
    },

    // Interactive Labs Renderers
    renderDragDropLab(lab) {
        const items = lab.items.map((item, idx) => `
            <div class="drag-item" draggable="true" data-item="${idx}" data-category="${item.category}">
                <strong>${item.name}</strong>
                <br>
                <span style="font-size:0.75rem;color:var(--text-muted);">${item.desc}</span>
            </div>
        `).join('');

        const targets = lab.targets.map(target => `
            <div class="drop-zone" data-target="${target}">
                <span class="drop-label">${target}</span>
                <span style="font-size:0.7rem;color:var(--text-muted);">Arrastra aquí</span>
            </div>
        `).join('');

        return `
            <div class="drag-container">
                <div class="drag-source">
                    <h5>Elementos a clasificar</h5>
                    <div class="drag-items" id="dragSource">${items}</div>
                </div>
                <div class="drag-target">
                    <h5>Categorías</h5>
                    <div class="drag-items" id="dragTarget">${targets}</div>
                </div>
            </div>
            <div id="dragFeedback" style="text-align:center;margin-top:1rem;font-weight:600;"></div>
            <script>
                (function(){
                    const items = document.querySelectorAll('.drag-item');
                    const zones = document.querySelectorAll('.drop-zone');
                    let dragged = null;
                    let score = 0;
                    const total = items.length;

                    items.forEach(item => {
                        item.addEventListener('dragstart', e => {
                            dragged = item;
                            item.classList.add('dragging');
                        });
                        item.addEventListener('dragend', () => {
                            item.classList.remove('dragging');
                        });
                    });

                    zones.forEach(zone => {
                        zone.addEventListener('dragover', e => {
                            e.preventDefault();
                            zone.classList.add('drag-over');
                        });
                        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
                        zone.addEventListener('drop', e => {
                            e.preventDefault();
                            zone.classList.remove('drag-over');
                            if (dragged) {
                                const targetCat = zone.dataset.target;
                                const itemCat = dragged.dataset.category;
                                dragged.classList.remove('wrong');
                                if (targetCat === itemCat) {
                                    dragged.classList.add('placed');
                                    zone.appendChild(dragged);
                                    score++;
                                } else {
                                    dragged.classList.add('wrong');
                                    setTimeout(() => dragged.classList.remove('wrong'), 600);
                                }
                                const fb = document.getElementById('dragFeedback');
                                fb.textContent = score === total ? '¡Excelente! Todas las clasificaciones son correctas.' : score + ' de ' + total + ' correctas';
                                fb.style.color = score === total ? 'var(--accent-green)' : 'var(--accent-amber)';
                            }
                        });
                    });
                })();
            </script>
        `;
    },

    renderLeanCanvas(title) {
        const sections = [
            { id: 'problem', name: 'Problema', rows: 3 },
            { id: 'solution', name: 'Solución', rows: 3 },
            { id: 'uvp', name: 'Propuesta de Valor Única', rows: 2 },
            { id: 'advantage', name: 'Ventaja Injusta', rows: 2 },
            { id: 'metrics', name: 'Métricas Clave', rows: 2 },
            { id: 'channels', name: 'Canales', rows: 2 },
            { id: 'segments', name: 'Segmentos de Clientes', rows: 3 },
            { id: 'costs', name: 'Estructura de Costos', rows: 2 },
            { id: 'revenue', name: 'Flujo de Ingresos', rows: 2 }
        ];

        return `
            <div style="margin:1rem 0;">
                <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">${title}</p>
                <div class="lean-canvas">
                    ${sections.map(s => `
                        <div class="lean-canvas-cell">
                            <h6>${s.name}</h6>
                            <textarea placeholder="Escribe aquí..." rows="${s.rows}"></textarea>
                        </div>
                    `).join('')}
                </div>
                <button class="btn btn-secondary" style="margin-top:1rem;" onclick="App.showToast('info','Canvas guardado localmente','Tu progreso se ha almacenado en el navegador.')">Guardar Canvas</button>
            </div>
        `;
    },

    renderBooleanBuilder() {
        const techTerms = ['machine learning', 'deep learning', 'neural network', 'artificial intelligence', 'blockchain'];
        const appTerms = ['fraud detection', 'payment processing', 'anomaly detection', 'credit card', 'cybersecurity'];
        const operators = ['AND', 'OR', 'NOT'];

        return `
            <div class="boolean-builder">
                <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Selecciona términos y operadores para construir tu ecuación:</p>
                <div style="margin-bottom:0.75rem;">
                    <span style="font-size:0.75rem;color:var(--text-muted);">Tecnología:</span>
                    <div class="boolean-tags" id="techTags">
                        ${techTerms.map(t => `<span class="boolean-tag" onclick="App.toggleBooleanTag(this,'${t}')">${t}</span>`).join('')}
                    </div>
                </div>
                <div style="margin-bottom:0.75rem;">
                    <span style="font-size:0.75rem;color:var(--text-muted);">Aplicación:</span>
                    <div class="boolean-tags" id="appTags">
                        ${appTerms.map(t => `<span class="boolean-tag" onclick="App.toggleBooleanTag(this,'${t}')">${t}</span>`).join('')}
                    </div>
                </div>
                <div style="margin-bottom:0.75rem;">
                    <span style="font-size:0.75rem;color:var(--text-muted);">Operadores:</span>
                    <div class="boolean-tags">
                        ${operators.map(op => `<span class="boolean-tag" onclick="App.toggleBooleanTag(this,'${op}')">${op}</span>`).join('')}
                    </div>
                </div>
                <div class="boolean-preview" id="booleanPreview">Haz clic en los términos y operadores para construir tu ecuación...</div>
                <div style="display:flex;gap:0.5rem;">
                    <button class="btn btn-primary" onclick="App.resetBoolean()">Limpiar</button>
                    <button class="btn btn-success" onclick="App.validateBoolean()">Validar Ecuación</button>
                </div>
            </div>
        `;
    },

    renderChecklistBuilder(instructions) {
        return `
            <div style="background:var(--bg-tertiary);border-radius:var(--radius-md);padding:1.25rem;">
                <p style="font-weight:600;font-size:0.85rem;color:var(--text-primary);margin-bottom:0.75rem;">📋 Instrucciones del laboratorio:</p>
                <ol style="color:var(--text-secondary);font-size:0.85rem;line-height:1.8;padding-left:1.25rem;">
                    ${instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
                <div style="margin-top:1.5rem;">
                    <textarea placeholder="Escribe aquí tu propuesta de programa de innovación intraempresarial..." 
                        style="width:100%;min-height:200px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;color:var(--text-primary);font-family:inherit;font-size:0.85rem;line-height:1.6;resize:vertical;"></textarea>
                </div>
                <button class="btn btn-secondary" style="margin-top:1rem;" onclick="App.showToast('info','Borrador guardado','Tu propuesta se ha guardado localmente.')">Guardar Borrador</button>
            </div>
        `;
    },

    renderSCurveLab() {
        return `
            <div class="sc-canvas-container">
                <canvas id="scCanvas"></canvas>
            </div>
            <div class="sc-controls">
                <div class="sc-control">
                    <label>Tecnología A (madura)</label>
                    <input type="range" id="scA" min="0" max="100" value="75" oninput="App.drawSCurve()">
                </div>
                <div class="sc-control">
                    <label>Tecnología B (nueva)</label>
                    <input type="range" id="scB" min="0" max="100" value="35" oninput="App.drawSCurve()">
                </div>
            </div>
            <p id="scAdvice" style="margin-top:1rem;padding:1rem;background:var(--bg-tertiary);border-radius:var(--radius-md);color:var(--text-secondary);font-size:0.85rem;line-height:1.6;">Ajusta los controles para ver el punto de cruze entre una tecnología madura y una emergente.</p>
            <script>
                setTimeout(() => App.drawSCurve(), 200);
            </script>
        `;
    },

    drawSCurve() {
        const canvas = document.getElementById('scCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        const w = canvas.width, h = canvas.height;
        const pad = 40;

        const valA = parseInt(document.getElementById('scA').value);
        const valB = parseInt(document.getElementById('scB').value);

        ctx.clearRect(0, 0, w, h);

        // Axes
        ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--border-color');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pad, pad);
        ctx.lineTo(pad, h - pad);
        ctx.lineTo(w - pad, h - pad);
        ctx.stroke();

        // Labels
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-muted');
        ctx.font = '12px Inter';
        ctx.fillText('Rendimiento', 5, pad - 10);
        ctx.fillText('Esfuerzo I+D', w - 70, h - 15);

        // Curve A (mature)
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let x = 0; x <= 100; x++) {
            const progress = x / 100;
            const y = 1 / (1 + Math.exp(-6 * (progress - valA / 100)));
            const px = pad + (w - 2 * pad) * progress;
            const py = h - pad - (h - 2 * pad) * y;
            if (x === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.fillStyle = '#22d3ee';
        ctx.fillText('Tecnología A (madura)', w - pad - 140, pad + 20);

        // Curve B (emerging)
        ctx.strokeStyle = '#e879f9';
        ctx.beginPath();
        for (let x = 0; x <= 100; x++) {
            const progress = x / 100;
            const y = 1 / (1 + Math.exp(-6 * (progress - valB / 100)));
            const px = pad + (w - 2 * pad) * progress;
            const py = h - pad - (h - 2 * pad) * y;
            if (x === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.fillStyle = '#e879f9';
        ctx.fillText('Tecnología B (nueva)', w - pad - 140, pad + 40);

        // Advice
        const advice = document.getElementById('scAdvice');
        if (advice) {
            if (valA > valB + 30) {
                advice.textContent = 'La Tecnología A está en madurez. Es momento de evaluar la transición hacia B. Los rendimientos marginales de A son decrecientes.';
                advice.style.borderLeft = '3px solid var(--accent-amber)';
            } else if (valB > valA - 10) {
                advice.textContent = 'La Tecnología B está despegando y superando a A. Este es el punto óptimo para la transición estratégica.';
                advice.style.borderLeft = '3px solid var(--accent-green)';
            } else {
                advice.textContent = 'Ambas tecnologías compiten. Evalúa costos de transición vs. beneficios de rendimiento antes de decidir.';
                advice.style.borderLeft = '3px solid var(--accent-cyan)';
            }
        }
    },

    setupAnsoffInteractive() {
        const cells = document.querySelectorAll('.ansoff-cell');
        const detail = document.getElementById('ansoffDetail');
        const detailTitle = document.getElementById('ansoffDetailTitle');
        const detailText = document.getElementById('ansoffDetailText');

        const descriptions = {
            'penetracion': { title: 'Penetración de Mercado', text: 'Producto existente en mercado actual. Estrategia: aumentar market share, marketing agresivo, fidelización. Ejemplo: Google Workspace compitiendo con Microsoft Office.' },
            'desarrollo-mercado': { title: 'Desarrollo de Mercado', text: 'Producto existente en mercado nuevo. Estrategia: expansión geográfica, nuevos segmentos, nuevos canales. Ejemplo: Netflix expandiéndose a India.' },
            'desarrollo-producto': { title: 'Desarrollo de Producto', text: 'Producto nuevo en mercado actual. Estrategia: I+D, features premium, upselling. Ejemplo: Adobe lanzando Firefly AI para sus suscriptores actuales.' },
            'diversificacion': { title: 'Diversificación', text: 'Producto nuevo en mercado nuevo. Riesgo más alto. Estrategia: adquisiciones, joint ventures, incubación. Ejemplo: Amazon entrando a la salud con Amazon Care.' }
        };

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                cells.forEach(c => c.classList.remove('active'));
                cell.classList.add('active');
                const key = cell.dataset.ansoff;
                const desc = descriptions[key];
                detailTitle.textContent = desc.title;
                detailText.textContent = desc.text;
                detail.style.display = 'block';
            });
        });
    },

    setupHypeCycleInteractive() {
        const points = document.querySelectorAll('.hype-point');
        const info = document.getElementById('hypeInfo');
        const infoTitle = document.getElementById('hypeTitle');
        const infoDesc = document.getElementById('hypeDesc');

        const phases = {
            'trigger': { title: 'Innovation Trigger', desc: 'Un avance desencadena interés mediático. A menudo no existen productos usables y la viabilidad comercial es incierta.' },
            'peak': { title: 'Peak of Inflated Expectations', desc: 'Publicidad temprana produce muchos éxitos... y muchos fracasos. Algunas empresas actúan; muchas no. El entusiasmo es masivo y especulativo.' },
            'trough': { title: 'Trough of Disillusionment', desc: 'El interés decae cuando las implementaciones fallan. Los productores se consolidan o desaparecen. Solo sobreviven quienes mejoran sus productos.' },
            'slope': { title: 'Slope of Enlightenment', desc: 'Más casos de uso reales se cristalizan. Aparecen productos de 2ª y 3ª generación. Empresas conservadoras aún dudan, pero los pioneros muestran ROI.' },
            'plateau': { title: 'Plateau of Productivity', desc: 'La adopción mainstream despega. Los criterios de viabilidad del proveedor están claramente definidos. La tecnología paga ampliamente.' }
        };

        points.forEach(point => {
            point.addEventListener('click', () => {
                points.forEach(p => p.classList.remove('active'));
                point.classList.add('active');
                const phase = point.dataset.phase;
                const data = phases[phase];
                infoTitle.textContent = data.title;
                infoDesc.textContent = data.desc;
                info.style.display = 'block';
            });
        });
    },

    // Boolean builder helpers
    booleanEquation: [],
    toggleBooleanTag(el, text) {
        el.classList.toggle('selected');
        const preview = document.getElementById('booleanPreview');
        const selected = Array.from(document.querySelectorAll('.boolean-tag.selected')).map(t => {
            const txt = t.textContent;
            if (['AND','OR','NOT'].includes(txt)) return txt;
            return `"${txt}"`;
        });
        preview.textContent = selected.length ? selected.join(' ') : 'Haz clic en los términos y operadores para construir tu ecuación...';
        preview.classList.toggle('empty', selected.length === 0);
    },
    resetBoolean() {
        document.querySelectorAll('.boolean-tag.selected').forEach(t => t.classList.remove('selected'));
        const preview = document.getElementById('booleanPreview');
        preview.textContent = 'Haz clic en los términos y operadores para construir tu ecuación...';
        preview.classList.add('empty');
    },
    validateBoolean() {
        const selected = Array.from(document.querySelectorAll('.boolean-tag.selected')).map(t => t.textContent);
        if (selected.length === 0) {
            this.showToast('warning','Ecuación vacía','Selecciona al menos un término y un operador.');
            return;
        }
        const hasOp = selected.some(s => ['AND','OR','NOT'].includes(s));
        const hasTerm = selected.some(s => !['AND','OR','NOT'].includes(s));
        if (!hasOp || !hasTerm) {
            this.showToast('warning','Ecuación incompleta','Necesitas al menos un término y un operador booleano.');
            return;
        }
        this.showToast('success','Ecuación válida','Tu ecuación booleana tiene la estructura correcta para una búsqueda de patentes.');
    },

    // Checklist and progress
    toggleCheck(weekId, checkIdx) {
        if (!this.state.progress[weekId]) this.state.progress[weekId] = { completed: false, checks: [] };
        if (!this.state.progress[weekId].checks) this.state.progress[weekId].checks = [];
        const idx = this.state.progress[weekId].checks.indexOf(checkIdx);
        if (idx > -1) {
            this.state.progress[weekId].checks.splice(idx, 1);
        } else {
            this.state.progress[weekId].checks.push(checkIdx);
        }
        this.saveProgress();
        this.renderWeek(weekId);
    },

    completeWeek(weekId) {
        if (!this.state.progress[weekId]) this.state.progress[weekId] = {};
        const wasCompleted = this.state.progress[weekId].completed;
        this.state.progress[weekId].completed = !wasCompleted;
        this.saveProgress();
        this.renderWeek(weekId);
        this.updateProgressRing();
        this.renderBadges();
        this.showToast(
            wasCompleted ? 'info' : 'success',
            wasCompleted ? 'Semana desmarcada' : '¡Semana completada!',
            wasCompleted ? 'Puedes seguir editando esta semana.' : 'Excelente progreso. Sigue así.'
        );
    },

    saveProgress() {
        localStorage.setItem('git01-progress', JSON.stringify(this.state.progress));
    },

    updateProgressRing() {
        const total = courseData.info.totalWeeks;
        const completed = Object.values(this.state.progress).filter(p => p.completed).length;
        const pct = Math.round((completed / total) * 100);
        const circumference = 2 * Math.PI * 36;
        const offset = circumference - (pct / 100) * circumference;

        const fill = document.getElementById('progressRingFill');
        if (fill) {
            fill.style.strokeDashoffset = offset;
        }
        const percentEl = document.getElementById('progressPercent');
        if (percentEl) {
            percentEl.textContent = pct + '%';
        }
    },

    renderBadges() {
        const container = document.getElementById('badgesContainer');
        const units = courseData.units;
        const badges = units.map(u => {
            const quizKey = `quiz-u${u.id}`;
            const hasQuiz = this.state.quizResults[quizKey];
            const allWeeksDone = u.weeks.every(w => this.state.progress[w]?.completed);
            const earned = hasQuiz && allWeeksDone;
            const emoji = ['🧠','🚀','⚡','🔭'][u.id - 1];
            return `<div class="badge ${earned ? 'earned' : ''}" title="Unidad ${u.id}${earned ? ' completada' : ' en progreso'}">${emoji}</div>`;
        }).join('');
        container.innerHTML = badges;
    },

    // Quiz system
    currentQuiz: null,
    currentQuestion: 0,

    startQuiz(quizId) {
        const quiz = courseData.quizzes[quizId];
        if (!quiz) return;
        this.currentQuiz = quiz;
        this.currentQuestion = 0;
        this.quizAnswers = {};

        document.getElementById('quizModalTitle').textContent = quiz.title;
        document.getElementById('quizModal').classList.add('open');
        this.renderQuestion();
    },

    renderQuestion() {
        const quiz = this.currentQuiz;
        const q = quiz.questions[this.currentQuestion];
        const total = quiz.questions.length;
        const progress = ((this.currentQuestion + 1) / total) * 100;

        const answered = this.quizAnswers[q.id];
        const showFeedback = answered !== undefined;
        const isCorrect = answered === q.correct;

        let html = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
                    <span class="quiz-progress-text">${this.currentQuestion + 1} / ${total}</span>
                </div>

                <div class="question-container">
                    <div class="question-number">Pregunta ${this.currentQuestion + 1}</div>
                    <div class="question-text">${q.text}</div>

                    <div class="options-container">
                        ${q.options.map((opt, idx) => {
                            let cls = 'option-btn';
                            if (showFeedback) {
                                if (idx === q.correct) cls += ' correct';
                                else if (idx === answered) cls += ' incorrect';
                            } else if (answered === idx) {
                                cls += ' selected';
                            }
                            return `
                                <button class="${cls}" onclick="App.selectOption(${idx})" ${showFeedback ? 'disabled' : ''}>
                                    <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                                    ${opt}
                                </button>
                            `;
                        }).join('')}
                    </div>

                    ${showFeedback ? `
                        <div class="feedback-container ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
                            <strong>${isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</strong><br>
                            ${q.feedback}
                        </div>
                    ` : ''}
                </div>

                <div class="quiz-actions">
                    ${this.currentQuestion > 0 ? `<button class="btn btn-secondary" onclick="App.prevQuestion()">← Anterior</button>` : '<div></div>'}
                    ${showFeedback ? `
                        <button class="btn btn-primary" onclick="App.nextQuestion()">
                            ${this.currentQuestion < total - 1 ? 'Siguiente →' : 'Ver Resultados'}
                        </button>
                    ` : '<div></div>'}
                </div>
            </div>
        `;

        document.getElementById('quizModalBody').innerHTML = html;
    },

    selectOption(idx) {
        const q = this.currentQuiz.questions[this.currentQuestion];
        this.quizAnswers[q.id] = idx;
        this.renderQuestion();
    },

    nextQuestion() {
        if (this.currentQuestion < this.currentQuiz.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        } else {
            this.showResults();
        }
    },

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    },

    showResults() {
        const quiz = this.currentQuiz;
        let correct = 0;
        quiz.questions.forEach(q => {
            if (this.quizAnswers[q.id] === q.correct) correct++;
        });
        const score = correct;
        const total = quiz.questions.length;
        const pct = Math.round((score / total) * 100);

        // Save results
        const quizKey = `quiz-u${quiz.unit}`;
        this.state.quizResults[quizKey] = { score, total, date: new Date().toISOString() };
        localStorage.setItem('git01-quiz', JSON.stringify(this.state.quizResults));

        let scoreClass = 'risk';
        let label = 'En Riesgo';
        let message = 'Necesitas reforzar los conceptos clave. Revisa el material de estudio y vuelve a intentarlo.';
        let refuerzo = '';

        if (score === total) {
            scoreClass = 'excellent';
            label = 'Excelente (Fortaleza)';
            message = '¡Dominio absoluto! Puedes avanzar con confianza a la siguiente unidad o profundizar en casos avanzados.';
        } else if (score >= 3) {
            scoreClass = 'good';
            label = 'Aceptable';
            message = 'Buen nivel, pero hay áreas específicas que necesitan refuerzo antes de avanzar.';
        }

        // Unit-specific reinforcement
        const refuerzos = {
            1: [
                'Lectura del capítulo 1 del Manual de Oslo (OCDE).',
                'Análisis del caso de estudio de sustitución tecnológica de Kodak.',
                'Desarrollar el ejercicio práctico de graficación de curvas S de lenguajes de programación.'
            ],
            2: [
                'Lectura del libro "El Método Lean Startup" de Eric Ries (Resumen Ejecutivo).',
                'Diseñar el mapa de compuertas Stage-Gate para un proyecto de software.',
                'Desarrollar el Canvas Lean Startup para una app móvil.'
            ],
            3: [
                'Lectura del artículo "How Information Gives You Competitive Advantage" (M. Porter).',
                'Elaborar la Matriz de McFarlan para 5 sistemas de una empresa real.',
                'Completar la guía de registro de software ante la Dirección Nacional de Derechos de Autor.'
            ],
            4: [
                'Taller práctico guiado: Formular 3 ecuaciones de búsqueda en Google Patents para un tema de IA.',
                'Análisis del informe actual de Gartner Hype Cycle for Emerging Technologies.',
                'Elaborar un boletín de vigilancia tecnológica simplificado.'
            ]
        };

        const currentRefuerzo = refuerzos[quiz.unit];
        if (score < total) {
            refuerzo = `
                <div style="margin-top:1.5rem;padding:1.25rem;background:var(--bg-tertiary);border-radius:var(--radius-md);border:1px solid var(--border-color);">
                    <p style="font-weight:700;font-size:0.9rem;color:var(--text-primary);margin-bottom:0.75rem;">📋 Plan de Refuerzo Recomendado:</p>
                    <ul style="list-style:none;padding:0;">
                        ${currentRefuerzo.map(r => `<li style="padding:0.4rem 0;color:var(--text-secondary);font-size:0.85rem;">• ${r}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        const html = `
            <div class="quiz-results">
                <div class="result-score ${scoreClass}">${score}/${total}</div>
                <div class="result-label" style="color:var(--text-primary);">${label}</div>
                <div class="result-message">${message}</div>
                ${refuerzo}
                <div class="result-actions">
                    <button class="btn btn-primary" onclick="App.closeModal()">Volver al Dashboard</button>
                    <button class="btn btn-secondary" onclick="App.startQuiz('${quizKey}')">Reintentar Test</button>
                </div>
            </div>
        `;

        document.getElementById('quizModalBody').innerHTML = html;
        this.renderBadges();
        this.renderNavigation();
    },

    closeModal() {
        document.getElementById('quizModal').classList.remove('open');
        this.currentQuiz = null;
    },

    // Toast system
    showToast(type, title, message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div>
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
