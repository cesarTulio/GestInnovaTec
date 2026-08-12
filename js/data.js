const courseData = {
    info: {
        code: 'GIT01',
        name: 'Gestión e Innovación de la Tecnología',
        program: 'Ingeniería de Software',
        level: 7,
        credits: 3,
        totalWeeks: 16
    },

    units: [
        {
            id: 1,
            name: 'Conceptos Claves',
            subtitle: 'Gestión, Innovación, Tecnología e Ingeniería',
            weeks: [1,2,3,4],
            color: 'cyan'
        },
        {
            id: 2,
            name: 'Gestión de la Innovación',
            subtitle: 'Modelos, Cultura y Fuentes',
            weeks: [5,6,7,8],
            color: 'magenta'
        },
        {
            id: 3,
            name: 'Gestión Estratégica',
            subtitle: 'Fuerzas del Mercado, Ventaja Competitiva e I+D+i',
            weeks: [9,10,11,12],
            color: 'amber'
        },
        {
            id: 4,
            name: 'Vigilancia Tecnológica',
            subtitle: 'Inteligencia Competitiva, Patentes y Prospectiva',
            weeks: [13,14,15,16],
            color: 'green'
        }
    ],

    diagnostic: {
        title: 'Diagnóstico de Saberes Previos',
        subtitle: 'Evalúa tu nivel de conocimiento antes de iniciar el curso',
        description: 'Este breve cuestionario ayudará al docente a conocer tu punto de partida y ajustar el ritmo del curso. No hay nota aprobatoria; responde con honestidad.',
        questions: [
            {
                id: 'dp1',
                text: 'En el contexto de tecnología, ¿cuál es la diferencia principal entre invención e innovación?',
                options: [
                    'No hay diferencia; ambos términos significan lo mismo.',
                    'La invención es la creación de algo nuevo, mientras que la innovación es su introducción exitosa en el mercado o en la práctica operacional.',
                    'La invención solo aplica a hardware y la innovación solo a software.',
                    'La innovación es más cara que la invención porque requiere marketing.'
                ],
                correct: 1
            },
            {
                id: 'dp2',
                text: '¿Qué modelo de gestión de la innovación utiliza "compuertas de decisión" (Gates) para filtrar proyectos en distintas etapas?',
                options: [
                    'Lean Startup',
                    'Stage-Gate de Robert Cooper',
                    'Design Thinking',
                    'Scrum Ágil'
                ],
                correct: 1
            },
            {
                id: 'dp3',
                text: 'Según Michael Porter, las "5 Fuerzas" sirven para analizar:',
                options: [
                    'La estructura de costos internos de una empresa de software.',
                    'El atractivo competitivo y la intensidad de una industria.',
                    'La calidad del código fuente de un producto tecnológico.',
                    'La velocidad de entrega de los equipos de desarrollo.'
                ],
                correct: 1
            },
            {
                id: 'dp4',
                text: '¿Cuál de las siguientes NO es una estrategia genérica de Porter?',
                options: [
                    'Liderazgo en Costos',
                    'Diferenciación',
                    'Enfoque (Nicho)',
                    'Outsourcing Total'
                ],
                correct: 3
            },
            {
                id: 'dp5',
                text: 'La propiedad intelectual de un software en Colombia se protege principalmente mediante:',
                options: [
                    'Patentes de invención únicamente.',
                    'Derechos de autor (obra literaria) y, en casos específicos, patentes de método implementado por ordenador.',
                    'Marcas comerciales exclusivamente.',
                    'No requiere registro; el software no se protege en Colombia.'
                ],
                correct: 1
            },
            {
                id: 'dp6',
                text: '¿Qué herramienta prospectiva de Gartner ilustra las 5 fases por las que pasa una tecnología desde su aparición hasta su madurez?',
                options: [
                    'Matriz de Ansoff',
                    'Hype Cycle',
                    'Curva en S',
                    'Matriz BCG'
                ],
                correct: 1
            },
            {
                id: 'dp7',
                text: 'En el modelo de Innovación Abierta (Chesbrough), "Inbound" se refiere a:',
                options: [
                    'Vender tecnología propia a otras empresas.',
                    'Adquirir ideas o tecnologías externas para incorporarlas a la empresa.',
                    'Contratar solo ingenieros internos.',
                    'Proteger todos los secretos industriales de la competencia.'
                ],
                correct: 1
            },
            {
                id: 'dp8',
                text: 'Un Producto Mínimo Viable (MVP) en Lean Startup tiene como objetivo principal:',
                options: [
                    'Lanzar un producto final con todas las funcionalidades.',
                    'Validar hipótesis de negocio con el mínimo esfuerzo e inversión posibles.',
                    'Demostrar la capacidad técnica del equipo de desarrollo.',
                    'Obtener inversión de riesgo antes de construir nada.'
                ],
                correct: 1
            },
            {
                id: 'dp9',
                text: '¿Qué norma española establece los requisitos para un Sistema de Gestión de I+D+i que incluye Vigilancia Tecnológica?',
                options: [
                    'ISO 9001',
                    'UNE 166006',
                    'ISO 27001',
                    'NIST Cybersecurity Framework'
                ],
                correct: 1
            },
            {
                id: 'dp10',
                text: '¿Qué estrategia describe una empresa que vende su producto existente en un mercado geográfico donde aún no operaba?',
                options: [
                    'Desarrollo de Producto',
                    'Desarrollo de Mercado',
                    'Diversificación',
                    'Penetración de Mercado'
                ],
                correct: 1
            }
        ]
    },

    weeks: {
        1: {
            id: 1, unit: 1, title: 'Articulación entre Gestión, Innovación, Tecnología e Ingeniería',
            objective: 'Establecer las fronteras y sinergias conceptuales entre la gestión del conocimiento, el desarrollo tecnológico y la ingeniería de software.',
            caseStudy: {
                title: 'Software Corp: La trampa de la excelencia técnica sin gestión',
                company: 'Software Corp',
                summary: 'Una empresa de desarrollo de software creó componentes avanzados de procesamiento de datos con arquitecturas revolucionarias. Sin embargo, nunca logró monetizarlos porque carecía de un proceso formal de gestión de la innovación. Sus ingenieros brillantes construían tecnología de clase mundial, pero nadie en la empresa sabía cómo llevarla al mercado, protegerla o escalarla comercialmente. La empresa quedó atrapada en el modelo de "inventar por inventar" sin articulación estratégica.',
                questions: [
                    '¿Por qué la excelencia técnica pura no garantiza el éxito comercial?',
                    '¿Qué pilar faltó en Software Corp: ingeniería, gestión, innovación o valor de mercado?',
                    '¿Cómo podría haberse evitado esta situación desde el inicio del desarrollo?'
                ]
            },
            theory: [
                {
                    title: '📐 Matriz Comparativa de Conceptos Fundamentales',
                    content: `
                        <div class="def-box">
                            <h4>Gestión</h4>
                            <p>Proceso de coordinar y optimizar recursos (humanos, financieros, técnicos) para alcanzar objetivos estratégicos. En software: Administración del ciclo de vida del desarrollo (ALM) y metodologías ágiles.</p>
                        </div>
                        <div class="def-box">
                            <h4>Tecnología</h4>
                            <p>Conjunto de conocimientos, herramientas, técnicas y componentes que permiten transformar insumos en soluciones. En software: Frameworks, infraestructuras cloud, motores de bases de datos y algoritmos.</p>
                        </div>
                        <div class="def-box">
                            <h4>Innovación</h4>
                            <p>Introducción <strong>exitosa</strong> en el mercado de un producto, servicio o proceso nuevo o significativamente mejorado. No basta inventar; hay que comercializar. En software: Lanzamiento de una plataforma SaaS que resuelve un problema de negocio de forma inédita.</p>
                        </div>
                        <div class="def-box">
                            <h4>Ingeniería</h4>
                            <p>Aplicación rigurosa de principios científicos y matemáticos para diseñar, construir y mantener soluciones. En software: Diseño de arquitecturas escalables, seguras y de alta disponibilidad.</p>
                        </div>
                        <p style="margin-top:1rem;color:var(--text-secondary);font-size:0.9rem;line-height:1.7">
                            La sinergia entre estos cuatro pilares es lo que diferencia a una empresa tecnológica exitosa de un simple taller de código. La <strong>ingeniería</strong> construye lo posible; la <strong>innovación</strong> descubre lo valioso; la <strong>tecnología</strong> lo materializa; y la <strong>gestión</strong> lo escala y monetiza.
                        </p>
                    `
                },
                {
                    title: '🧠 Taxonomía de la Innovación Tecnológica',
                    content: `
                        <table class="data-table">
                            <thead>
                                <tr><th>Concepto</th><th>Definición</th><th>Ejemplo en Software</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Invención</strong></td><td>Creación de algo nuevo que no existía antes.</td><td>Desarrollar un algoritmo de compresión nunca visto.</td></tr>
                                <tr><td><strong>Innovación</strong></td><td>Invención que se introduce con éxito en el mercado o práctica operacional.</td><td>Comercializar ese algoritmo como servicio cloud.</td></tr>
                                <tr><td><strong>Difusión</strong></td><td>Proceso de adopción de la innovación por otros actores.</td><td>Adopción del algoritmo por otras empresas vía API.</td></tr>
                                <tr><td><strong>Imitación</strong></td><td>Copia o adaptación de una innovación existente.</td><td>Competidores lanzan servicios similares.</td></tr>
                            </tbody>
                        </table>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Regla de oro:</strong> Una invención archivada en un servidor <em>no es innovación</em>. La innovación requiere la tríada: novedad técnica + aplicación práctica + adopción de mercado.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Mapa Mental Integrador',
                type: 'canvas',
                description: 'Construye un mapa mental que articule los 4 pilares (Ingeniería + Gestión + Innovación + Valor de Mercado) aplicado a un producto tech que admires.',
                instructions: [
                    'Elige un producto digital exitoso (ej. Spotify, Notion, Stripe).',
                    'Identifica en qué parte del mapa cae cada decisión clave de la empresa.',
                    'Determina cuál pilar fue más determinante para su éxito.'
                ]
            },
            resources: [
                { title: 'Manual de Oslo (OCDE, 2018)', url: 'https://www.oecd.org/sti/inno/oslo-manual-2018-en.htm' },
                { title: 'Gestión de la Innovación y la Tecnología - Hidalgo et al.', url: 'https://www.amazon.com/Gestion-innovacion-tecnologia-Albors-Garrigos/dp/8478978883' },
                { title: 'What is Innovation? - OECD', url: 'https://www.oecd.org/innovation/' }
            ],
            checklist: [
                'Comprendo la diferencia entre invención e innovación',
                'Puedo explicar los 4 pilares de la gestión tecnológica',
                'Analicé el caso de Software Corp y identifiqué sus fallas',
                'Completé el mapa mental del laboratorio'
            ]
        },

        2: {
            id: 2, unit: 1, title: 'Clasificación y Tipología de la Innovación',
            objective: 'Clasificar innovaciones tecnológicas según su grado de novedad (Incremental, Radical, Disruptiva, Arquitectónica).',
            caseStudy: {
                title: 'Blockbuster vs. Netflix: El colapso de un imperio',
                company: 'Blockbuster / Netflix',
                summary: 'En 2000, Blockbuster era un gigante con 9,000 tiendas y $6B en ingresos. Netflix, fundada en 1997, propuso un modelo de renta por correo que parecía un juego de nicho. En 2007, Netflix lanzó el streaming, atacando directamente el segmento desatendido de consumidores que no querían salir de casa. Blockbuster subestimó la amenaza porque Netflix no competía directamente con su modelo premium inicial; atacó desde abajo. Para 2010, Blockbuster declaró bancarrota. La tecnología de streaming/cloud no fue mejorada incremental del videoclub; fue una innovación disruptiva que creó un mercado nuevo y eventualmente desplazó al líder.',
                questions: [
                    '¿Por qué Blockbuster no respondió a tiempo si ya conocía el streaming?',
                    '¿Netflix fue una innovación radical, disruptiva o ambas?',
                    '¿Qué lección aplica a startups que hoy compiten contra gigantes tech?'
                ]
            },
            theory: [
                {
                    title: '🔷 Matriz de Tipología de Innovación (Henderson & Clark, 1990)',
                    content: `
                        <table class="data-table">
                            <thead>
                                <tr><th>Tipo</th><th>Definición</th><th>Ejemplo en Software</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong style="color:var(--accent-blue)">Incremental</strong></td><td>Mejoras continuas en un producto existente sin alterar su arquitectura.</td><td>Optimizar la velocidad de carga de un sitio web en un 15% mediante mejores queries.</td></tr>
                                <tr><td><strong style="color:var(--accent-magenta)">Radical</strong></td><td>Tecnología completamente nueva que crea una nueva categoría de producto.</td><td>Invención del motor de búsqueda semántico o la pantalla táctil capacitiva.</td></tr>
                                <tr><td><strong style="color:var(--accent-rose)">Disruptiva</strong></td><td>Solución más accesible y económica que ataca segmentos desatendidos hasta desplazar a los líderes.</td><td>Netflix reemplazando videoclubes físicos; Notion reemplazando suites de ofimática.</td></tr>
                                <tr><td><strong style="color:var(--accent-cyan)">Arquitectónica</strong></td><td>Reconfiguración de la forma en que los componentes interactúan sin cambiar los componentes individuales.</td><td>Migrar una app monolítica a microservicios usando los mismos lenguajes.</td></tr>
                            </tbody>
                        </table>
                        <p style="margin-top:1rem;color:var(--text-secondary);font-size:0.9rem;line-height:1.7">
                            <strong>El Dilema del Innovador (Christensen):</strong> Las empresas líderes racionmente asignan recursos a innovaciones incrementales que satisfacen a sus clientes actuales, dejando vulnerables los segmentos de bajo margen. Esos segmentos son exactamente donde las disruptivas germinan.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Clasificador de Innovaciones Tech',
                type: 'interactive',
                description: 'Analiza 3 productos tecnológicos actuales y clasifícalos en la matriz de Henderson-Clark.',
                interactiveType: 'drag-drop',
                items: [
                    { name: 'Transición de DVD a Blu-ray', category: 'Incremental', desc: 'Mejora en capacidad de almacenamiento del mismo formato óptico.' },
                    { name: 'Creación del iPhone (2007)', category: 'Radical', desc: 'Nueva categoría de dispositivo que fusionó teléfono, iPod e internet.' },
                    { name: 'Netflix streaming vs. Blockbuster', category: 'Disruptiva', desc: 'Atacó desde un segmento desatendido hasta desplazar al líder.' },
                    { name: 'Monolito → Microservicios', category: 'Arquitectónica', desc: 'Misma lógica de negocio, reconfigurada en servicios independientes.' },
                    { name: 'GPT-4 como asistente de código', category: 'Disruptiva', desc: 'Ataca el segmento de desarrollo junior, amenazando modelos tradicionales.' }
                ],
                targets: ['Incremental', 'Radical', 'Disruptiva', 'Arquitectónica']
            },
            resources: [
                { title: 'The Innovator\'s Dilemma - Clayton Christensen', url: 'https://hbr.org/2015/12/clayton-christensens-the-innovators-dilemma' },
                { title: 'Henderson & Clark (1990) - Architectural Innovation', url: 'https://www.jstor.org/stable/2393549' },
                { title: 'Caso Harvard: Netflix Disruptive Innovation', url: 'https://www.hbs.edu/faculty/Publication%20Files/Netflix_618_017.pdf' }
            ],
            checklist: [
                'Entiendo la diferencia entre innovación incremental y radical',
                'Puedo identificar una innovación disruptiva en el mercado actual',
                'Completé la matriz de tipología con 3 productos',
                'Analicé el dilema del innovador en un caso real'
            ]
        },

        3: {
            id: 3, unit: 1, title: 'Ciclo de Vida Tecnológico y Curvas en S (S-Curves)',
            objective: 'Mapear la madurez de tecnologías de software e identificar momentos óptimos de sustitución tecnológica.',
            caseStudy: {
                title: 'Sistemas Legados COBOL: La deuda técnica de $3 trillones',
                company: 'Sistemas Financieros Globales',
                summary: 'En 2023, estimaciones del Gartner indican que más del 43% de los sistemas bancarios globales aún ejecutan código COBOL escrito entre 1970 y 1990. Cada año, el 10% de los desarrolladores COBOL se jubilan. La curva en S del lenguaje COBOL está en su fase de madurez terminal desde hace dos décadas: los incrementos de inversión en I+D no producen mejoras de rendimiento. Sin embargo, el costo de migrar a microservicios cloud-native es tan alto ($ billions) que los bancos postergan la transición. Este es un caso clásico de discontinuidad tecnológica: una nueva curva en S (Java/Go/Cloud) ya superó en rendimiento a la antigua, pero la inercia organizacional retrasa el salto.',
                questions: [
                    '¿Por qué los bancos no migraron de COBOL hace 15 años?',
                    '¿En qué punto de la curva en S debería haberse iniciado la transición?',
                    '¿Qué frameworks modernos representan la nueva curva S?'
                ]
            },
            theory: [
                {
                    title: '📈 La Curva en S de la Tecnología',
                    content: `
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem">
                            La Curva en S describe la relación entre el esfuerzo acumulado de I+D y el rendimiento de una tecnología. Tiene cuatro fases:
                        </p>
                        <ul class="content-list">
                            <li><strong>Fase 1 - Emergencia:</strong> Rendimiento bajo, alta incertidumbre. Muchas tecnologías compiten.</li>
                            <li><strong>Fase 2 - Crecimiento:</strong> Mejoras rápidas con cada inversión adicional. Es el momento de adoptar.</li>
                            <li><strong>Fase 3 - Madurez:</strong> Rendimiento se estabiliza. Las mejoras marginales cuestan cada vez más.</li>
                            <li><strong>Fase 4 - Declive:</strong> La tecnología alcanza su límite físico/teórico. Aparece una nueva curva S que la supera.</li>
                        </ul>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Decisión estratégica clave:</strong> El momento óptimo para saltar a una nueva tecnología es cuando la curva actual está en la fase superior plana de madurez, <em>antes</em> de que la nueva curva haya despegado completamente. Saltar demasiado temprano es riesgoso; saltar demasiado tarde es letal.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio Interactivo: Graficador de Curvas en S',
                type: 'canvas',
                description: 'Ajusta los parámetros de dos tecnologías competidoras y visualiza el punto de cruze óptimo para la transición.',
                interactiveType: 's-curve',
                techA: 'Angular.js (Framework maduro)',
                techB: 'React + Next.js (Framework emergente)'
            },
            resources: [
                { title: 'Technology S-Curves - ThoughtWorks Tech Radar', url: 'https://www.thoughtworks.com/radar' },
                { title: 'Gartner: Application Modernization Strategies', url: 'https://www.gartner.com/en/information-technology' },
                { title: 'Caso Kodak: Falla en la transición de curva S', url: 'https://hbr.org/2016/06/kodaks-downfall-wasnt-about-technology' }
            ],
            checklist: [
                'Comprendo las 4 fases de la Curva en S',
                'Puedo identificar en qué fase se encuentra una tecnología actual',
                'Utilicé el graficador interactivo para comparar dos tecnologías',
                'Analicé el caso de COBOL y la discontinuidad tecnológica'
            ]
        },

        4: {
            id: 4, unit: 1, title: 'Evaluación de Conceptos Claves y Diagnóstico Inicial',
            objective: 'Evaluar la apropiación conceptual de la gestión tecnológica en proyectos de ingeniería.',
            caseStudy: {
                title: 'Startup EduTech: Clasificación ante una aceleradora',
                company: 'EduTech Startup',
                summary: 'Una startup colombiana de educación virtual desarrolló una plataforma con IA generativa para tutorías personalizadas. Debe presentar su propuesta ante Y Combinator. El reto: clasificar su innovación correctamente, demostrar que entiende su posición en la curva en S de la edtech, y probar que tiene un modelo de gestión que escala. Muchas startups fallan no por la tecnología, sino porque no pueden articular qué tipo de innovación traen y por qué el momento es ahora.',
                questions: [
                    '¿Es su innovación incremental, radical o disruptiva?',
                    '¿En qué fase de la curva en S se encuentra la edtech con IA generativa?',
                    '¿Qué tipo de gestión necesitan para escalar de 1,000 a 100,000 usuarios?'
                ]
            },
            theory: [
                {
                    title: '🎯 Diagnóstico de Madurez Innovadora',
                    content: `
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem">
                            Antes de diseñar estrategias, el ingeniero de software y el equipo directivo deben conocer su punto de partida. El diagnóstico de madurez innovadora evalúa:
                        </p>
                        <ul class="content-list">
                            <li><strong>Capacidad técnica:</strong> ¿Qué tan avanzada es la tecnología base de la empresa?</li>
                            <li><strong>Capacidad de gestión:</strong> ¿Existen procesos formales para evaluar ideas, filtrar proyectos y escalar productos?</li>
                            <li><strong>Capacidad de mercado:</strong> ¿Se comprende el cliente, el modelo de ingresos y la propuesta de valor?</li>
                            <li><strong>Capacidad de protección:</strong> ¿Se protegen los activos intangibles mediante IP adecuada?</li>
                        </ul>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            LaStartup EduTech del caso logró la aceptación en la aceleradora solo cuando demostró que su innovación era <strong>disruptiva</strong> (atacaba el segmento de tutoría accesible que los gigantes ignoraban), que estaba en la <strong>fase de crecimiento</strong> de la curva S de la IA generativa, y que tenía un roadmap de gestión alineado con Lean Startup.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Autoevaluación Práctica Unidad 1',
                type: 'quiz',
                description: 'Responde el test de autoevaluación para medir tu dominio de los conceptos clave. Al finalizar, recibirás un plan de refuerzo personalizado.',
                quizId: 'quiz-u1'
            },
            resources: [
                { title: 'Manual de Oslo (OCDE, 2018)', url: 'https://www.oecd.org/sti/inno/oslo-manual-2018-en.htm' }
            ],
            checklist: [
                'Completé el test de autoevaluación Unidad 1',
                'Revisé mi plan de refuerzo personalizado',
                'Identifiqué mis fortalezas y áreas de mejora'
            ],
            assignment: {
                title: 'Trabajo de Investigación: Salto de Curva S',
                type: 'investigacion',
                description: 'Investiga un caso real de sustitución tecnológica (ej. Kodak, Blockbuster, Nokia, COBOL) y analiza por qué la empresa líder no logró saltar a la nueva curva en S. Aplica las 4 fases de la curva en S y propone una estrategia de transición que hubiera evitado la caída.',
                deliverables: [
                    'Ensayo de 1,500 - 2,000 palabras con análisis de las 4 fases de la curva S.',
                    'Gráfico comparativo de la curva S de la tecnología antigua vs. la nueva.',
                    'Conclusiones estratégicas aplicables a startups de software.'
                ],
                format: 'Documento PDF',
                deadline: 'Semana 4'
            },
            hasReferences: true
        },

        5: {
            id: 5, unit: 2, title: 'Modelo Stage-Gate de Robert Cooper',
            objective: 'Estructurar un proceso formal de embudo de innovación con compuertas de decisión (Gates) para desarrollo de productos.',
            caseStudy: {
                title: 'AppStudio: Proyectos muertos a mitad de camino',
                company: 'AppStudio Lab',
                summary: 'AppStudio era un laboratorio de software con 40 desarrolladores que lanzaba proyectos sin validación previa. En 2022, iniciaron 12 proyectos. A mitad de año, 7 fueron cancelados por falta de mercado, 2 quedaron en pausa indefinida por problemas técnicos irresolubles, y solo 3 llegaron a producción. El costo de oportunidad fue de $2.3M en salarios desperdiciados. La empresa no tenía compuertas de decisión (Gates). Cada proyecto recibía presupuesto completo desde el día 1 hasta el potencial lanzamiento. Nadie evaluaba si la idea merecía seguir invirtiéndose en la etapa 2, 3 o 4.',
                questions: [
                    '¿Qué compuerta (Gate) debería haber detenido los proyectos sin mercado?',
                    '¿Cuál es la diferencia entre una decisión Go, Kill, Hold y Recycle?',
                    '¿Cómo adaptar Stage-Gate a un equipo ágil de software?'
                ]
            },
            theory: [
                {
                    title: '🚦 El Proceso Stage-Gate de Robert Cooper',
                    content: `
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem">
                            El Stage-Gate es un mapa de ruta operativo para dirigir proyectos de nuevos productos desde la idea hasta el lanzamiento. Cada "Stage" (etapa) está seguido por un "Gate" (compuerta de decisión).
                        </p>
                        <table class="data-table">
                            <thead>
                                <tr><th>Etapa</th><th>Actividad Clave</th><th>Entregable</th><th>Decisión Gate</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Descubrimiento</strong></td><td>Ideación y generación de conceptos</td><td>Lista de ideas priorizadas</td><td>Go → Stage 1</td></tr>
                                <tr><td><strong>Stage 1: Scoping</strong></td><td>Evaluación rápida de méritos técnicos y de mercado</td><td>Informe de viabilidad preliminar</td><td>Go/Kill/Hold</td></tr>
                                <tr><td><strong>Stage 2: Business Case</strong></td><td>Análisis detallado, requerimientos de usuario, factibilidad</td><td>Documento de caso de negocio</td><td>Go/Kill/Recycle</td></tr>
                                <tr><td><strong>Stage 3: Desarrollo</strong></td><td>Diseño del software, arquitectura, codificación del prototipo</td><td>Prototipo funcional (MVP)</td><td>Go/Hold</td></tr>
                                <tr><td><strong>Stage 4: Testing</strong></td><td>Testing de software, pruebas alfa/beta con usuarios reales</td><td>Informe de validación con usuarios</td><td>Go/Kill</td></tr>
                                <tr><td><strong>Stage 5: Lanzamiento</strong></td><td>Lanzamiento al mercado y escalamiento operativo</td><td>Producto en producción con métricas</td><td>Evaluación post-lanzamiento</td></tr>
                            </tbody>
                        </table>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Decisiones de Gate:</strong> <span style="color:var(--accent-green)">Go</span> (continuar), <span style="color:var(--accent-rose)">Kill</span> (cancelar), <span style="color:var(--accent-amber)">Hold</span> (pausar), <span style="color:var(--accent-cyan)">Recycle</span> (volver a una etapa anterior con cambios).
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio Interactivo: Diseña tu Stage-Gate',
                type: 'interactive',
                description: 'Arrastra las etapas del modelo Stage-Gate al embudo correcto y define los criterios Go/Kill para cada compuerta.',
                interactiveType: 'drag-drop',
                items: [
                    { name: 'Ideación y Brainstorming', category: 'Descubrimiento', desc: 'Generar ideas sin juicio.' },
                    { name: 'Evaluar mercado y tech en 1 semana', category: 'Stage 1: Scoping', desc: 'Validación rápida.' },
                    { name: 'Caso de negocio detallado', category: 'Stage 2: Business Case', desc: 'ROI, usuarios, factibilidad.' },
                    { name: 'Codificación del MVP', category: 'Stage 3: Desarrollo', desc: 'Prototipo funcional.' },
                    { name: 'Pruebas con usuarios reales', category: 'Stage 4: Testing', desc: 'Alfa/Beta testing.' },
                    { name: 'Go-to-market y escalar', category: 'Stage 5: Lanzamiento', desc: 'Comercialización.' }
                ],
                targets: ['Descubrimiento', 'Stage 1: Scoping', 'Stage 2: Business Case', 'Stage 3: Desarrollo', 'Stage 4: Testing', 'Stage 5: Lanzamiento']
            },
            resources: [
                { title: 'Cooper, R. G. (2001). Winning at New Products', url: 'https://www.amazon.com/Winning-New-Products-Accelerating-Idea/dp/0738204630' },
                { title: 'Stage-Gate International - Recursos oficiales', url: 'https://www.stage-gate.com/' },
                { title: 'Plantilla de Gate Review (Mendeley)', url: 'https://www.mendeley.com/' }
            ],
            checklist: [
                'Entiendo las 5 etapas del Stage-Gate',
                'Puedo definir criterios Go/Kill para cada compuerta',
                'Diseñé el embudo Stage-Gate personalizado para AppStudio',
                'Identifiqué por qué AppStudio perdía dinero sin Gates'
            ]
        },

        6: {
            id: 6, unit: 2, title: 'Innovación Abierta (Open Innovation) y Transferencia Tecnológica',
            objective: 'Aplicar el modelo de Innovación Abierta (Chesbrough) para acelerar el I+D colaborando con ecosistemas externos.',
            caseStudy: {
                title: 'Telefónica Movistar: Hackathons y APIs abiertas',
                company: 'Telefónica Movistar',
                summary: 'En 2019, Telefónica lanzó su programa "Open Future" en Latinoamérica. Abrieron APIs de geolocalización, facturación y mensajería para que startups externas construyan apps sobre su infraestructura. En 2 años, incorporaron 15 startups ganadoras de hackathons como partners tecnológicos. Una de ellas, especializada en pagos móviles, fue adquirida por la empresa 18 meses después. Este es un ejemplo de Innovación Abierta Inbound (traer ideas de afuera) y Outbound (lanzar APIs para que otros innoven sobre tu plataforma), creando un ecosistema de valor mutuo.',
                questions: [
                    '¿Por qué una multinacional permite que startups usen sus APIs gratuitamente?',
                    '¿Qué mecanismo de transferencia tecnológica se usó aquí: licenciamiento, joint venture o spin-off?',
                    '¿Cómo proteger la IP cuando se abren las fronteras de I+D?'
                ]
            },
            theory: [
                {
                    title: '🌐 Modelo de Innovación Abierta (Chesbrough, 2003)',
                    content: `
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem">
                            Henry Chesbrough definió la Innovación Abierta como: "un paradigma que asume que las empresas pueden y deben usar ideas externas e internas, y caminos internos y externos al mercado, para avanzar en su tecnología."
                        </p>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0;">
                            <div class="def-box" style="border-left-color:var(--accent-cyan)">
                                <h4 style="color:var(--accent-cyan)">Inbound (De afuera hacia adentro)</h4>
                                <p>Adquirir tecnología externa: adquisiciones de startups, licenciamiento de patentes, contratos de I+D con universidades, hackathons.</p>
                            </div>
                            <div class="def-box" style="border-left-color:var(--accent-magenta)">
                                <h4 style="color:var(--accent-magenta)">Outbound (De adentro hacia afuera)</h4>
                                <p>Llevar tecnología interna al exterior: licenciamiento de software propio, spin-offs de unidades no estratégicas, venta de patentes, APIs abiertas.</p>
                            </div>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Mecanismos de Transferencia Tecnológica:</strong>
                        </p>
                        <ul class="content-list">
                            <li><strong>Licenciamiento de Software:</strong> Permiso legal para usar, modificar o distribuir una tecnología a cambio de regalías.</li>
                            <li><strong>Spin-offs:</strong> Crear una empresa nueva a partir de una unidad o tecnología interna.</li>
                            <li><strong>Joint Ventures:</strong> Alianza con otra empresa para co-desarrollar una tecnología compartiendo riesgos y beneficios.</li>
                            <li><strong>Contratos de I+D:</strong> Acuerdo con universidades o centros de investigación para desarrollar tecnología específica.</li>
                        </ul>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Estrategia Open Innovation para Telefónica',
                type: 'interactive',
                description: 'Diseña una estrategia de Innovación Abierta que integre APIs externas para una empresa de telecomunicaciones.',
                interactiveType: 'lean-canvas',
                canvasTitle: 'Canvas de Estrategia Open Innovation'
            },
            resources: [
                { title: 'Chesbrough, H. (2003). Open Innovation', url: 'https://www.amazon.com/Open-Innovation-Imperative-Creating-Profiting/dp/1422102834' },
                { title: 'WIPO Technology Transfer', url: 'https://www.wipo.int/technology-transfer/en/' },
                { title: 'WIPO Technology Transfer Resources', url: 'https://www.wipo.int/technology-transfer/en/' }
            ],
            checklist: [
                'Comprendo la diferencia entre Inbound y Outbound',
                'Puedo identificar 4 mecanismos de transferencia tecnológica',
                'Diseñé una estrategia Open Innovation aplicada a un caso real',
                'Identifiqué los riesgos de IP al abrir la innovación'
            ]
        },

        7: {
            id: 7, unit: 2, title: 'Design Thinking + Lean Startup en Innovación de Software',
            objective: 'Integrar empatía con el usuario y experimentación rápida para reducir el riesgo de producto.',
            caseStudy: {
                title: 'MiPocket Fintech: De la idea al MVP en 14 días',
                company: 'MiPocket',
                summary: 'En 2023, un equipo de 3 desarrolladores en Bogotá quería validar si existía interés en préstamos peer-to-peer para freelancers. En lugar de construir una app completa (6 meses, $50K), aplicaron Design Thinking: entrevistaron 20 freelancers en 3 días, descubrieron que el dolor real no era conseguir préstamos, sino la falta de historial crediticio. Pivotaron la idea a una plataforma de "scoring alternativo" usando datos de trabajo freelance. Construyeron un MVP de landing page + formulario de interés en 1 semana. En 2 semanas, 400 freelancers se registraron. Invirtieron $800 en desarrollo. El aprendizaje validado les permitió levantar $150K en pre-seed.',
                questions: [
                    '¿Por qué entrevistar usuarios antes de programar?',
                    '¿Qué descubrieron en la fase de "Empatizar" que cambió todo el producto?',
                    '¿El landing page + formulario es un MVP válido?'
                ]
            },
            theory: [
                {
                    title: '🎨 Sinergia Design Thinking + Lean Startup',
                    content: `
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:1rem 0;">
                            <div style="background:var(--bg-tertiary);border-radius:var(--radius-md);padding:1.25rem;border:1px solid var(--border-color);">
                                <h4 style="color:var(--accent-magenta);margin-bottom:0.75rem;font-size:0.9rem;">🎨 Design Thinking</h4>
                                <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;margin-bottom:0.75rem"><strong>Misión:</strong> Descubrir el problema correcto.</p>
                                <ul style="list-style:none;padding:0;font-size:0.8rem;color:var(--text-secondary);line-height:1.7;">
                                    <li>1. Empatizar (con el usuario)</li>
                                    <li>2. Definir (el problema real)</li>
                                    <li>3. Idear (soluciones posibles)</li>
                                    <li>4. Prototipar (bocetos rápidos)</li>
                                    <li>5. Testear (con usuarios reales)</li>
                                </ul>
                            </div>
                            <div style="background:var(--bg-tertiary);border-radius:var(--radius-md);padding:1.25rem;border:1px solid var(--border-color);">
                                <h4 style="color:var(--accent-green);margin-bottom:0.75rem;font-size:0.9rem;">🚀 Lean Startup</h4>
                                <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;margin-bottom:0.75rem"><strong>Misión:</strong> Construir la solución correcta.</p>
                                <ul style="list-style:none;padding:0;font-size:0.8rem;color:var(--text-secondary);line-height:1.7;">
                                    <li>1. Construir (MVP mínimo)</li>
                                    <li>2. Medir (métricas de uso)</li>
                                    <li>3. Aprender (validar hipótesis)</li>
                                    <li>4. Pivotar o perseverar</li>
                                </ul>
                            </div>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Producto Mínimo Viable (MVP):</strong> No es un producto pequeño; es el experimento más pequeño que puedes construir para <em>validar una hipótesis de negocio</em>. Un MVP puede ser una landing page, un chatbot en WhatsApp, o una hoja de cálculo con macros. Lo importante no es la tecnología; es el aprendizaje validado.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Canvas Lean Startup para MiPocket',
                type: 'interactive',
                description: 'Completa el Lienzo Lean Canvas con la información del caso MiPocket para practicar la articulación del modelo de negocio.',
                interactiveType: 'lean-canvas',
                canvasTitle: 'Lean Canvas - MiPocket Fintech'
            },
            resources: [
                { title: 'Ries, E. (2011). The Lean Startup', url: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898' },
                { title: 'Stanford d.school - Design Thinking Resources', url: 'https://dschool.stanford.edu/' },
                { title: 'Figma para prototipado rápido', url: 'https://www.figma.com/' }
            ],
            checklist: [
                'Entiendo las 5 fases de Design Thinking',
                'Puedo definir un MVP que valide una hipótesis',
                'Completé el Canvas Lean Startup',
                'Analicé el ciclo Construir-Medir-Aprender'
            ]
        },

        8: {
            id: 8, unit: 2, title: 'Cultura de la Innovación, Fuentes y Evaluación',
            objective: 'Fomentar ambientes organizacionales altamente innovadores e identificar fuentes internas/externas de ideas.',
            caseStudy: {
                title: 'Google: El mito del 20% Time',
                company: 'Google',
                summary: 'Google institucionalizó en sus inicios la política de que los ingenieros podían dedicar el 20% de su tiempo a proyectos personales. De esa política nacieron Gmail, AdSense y Google News. Sin embargo, en 2013, informes internos y ex-empleados revelaron que la política se había debilitado: la presión por entregas en los proyectos principales hacía que el 20% time fuera voluntario y poco incentivado. Aún así, Google mantuvo programas formales de "intrapreneurship" como Area 120, donde equipos internos incuban startups con recursos de la empresa. La lección: la cultura de innovación no se declara; se mide, se premia y se protege del día a día operativo.',
                questions: [
                    '¿Por qué falló el 20% time a largo plazo si funcionó al inicio?',
                    '¿Qué diferencia hay entre un programa de innovación formal (Area 120) y una política informal?',
                    '¿Cómo diseñarías un programa de innovación intraempresarial que sea sostenible?'
                ]
            },
            theory: [
                {
                    title: '💡 Las 7 Fuentes de Innovación (Peter Drucker)',
                    content: `
                        <table class="data-table">
                            <thead>
                                <tr><th>Fuente</th><th>Descripción</th><th>Ejemplo Software</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>1. Lo inesperado</td><td>Éxito o fracaso inesperado que abre oportunidad.</td><td>Un bug de un juego se convierte en mecánica viral.</td></tr>
                                <tr><td>2. La incongruencia</td><td>Discrepancia entre lo que es y lo que debería ser.</td><td>Los CRM son lentos; nace un CRM basado en Notion.</td></tr>
                                <tr><td>3. La necesidad del proceso</td><td>Debilitamiento de un proceso existente que requiere innovación.</td><td>La migración manual de datos impulsa una herramienta ETL.</td></tr>
                                <tr><td>4. Cambios en la estructura industrial</td><td>Disrupciones en la cadena de valor.</td><td>La nube reduce costos de entrada; nacen miles de SaaS.</td></tr>
                                <tr><td>5. Cambios demográficos</td><td>Nuevos grupos de población con necesidades distintas.</td><td>Apps para la "silver economy" (adultos mayores digitales).</td></tr>
                                <tr><td>6. Cambios en la percepción</td><td>Transformaciones sociales y culturales.</td><td>Preocupación por privacidad impulsa navegadores foco.</td></tr>
                                <tr><td>7. Nuevos conocimientos</td><td>Descubrimientos científicos o tecnológicos.</td><td>Los LLMs permiten asistentes de código generativo.</td></tr>
                            </tbody>
                        </table>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Intrapreneurship:</strong> El arte de ser emprendedor dentro de una empresa grande. Requiere: tiempo protegido, presupuesto semilla, métricas de innovación separadas de las operativas, y un "patrocinador ejecutivo" que proteja al equipo de la burocracia.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Programa de Cultura de Innovación',
                type: 'interactive',
                description: 'Diseña un programa de intrapreneurship para una empresa de 200 empleados de desarrollo de software.',
                interactiveType: 'checklist-builder',
                instructions: [
                    'Define 3 métricas de innovación que no sean solo ingresos.',
                    'Diseña un sistema de incentivos para los equipos innovadores.',
                    'Establece un proceso de protección del tiempo de innovación.'
                ]
            },
            resources: [
                { title: 'Drucker, P. (1985). Innovation and Entrepreneurship', url: 'https://www.amazon.com/Innovation-Entrepreneurship-Peter-F-Drucker/dp/0060851139' },
                { title: 'Google Area 120', url: 'https://area120.google.com/' },
                { title: 'European Commission - Research and Innovation Policy', url: 'https://research-and-innovation.ec.europa.eu/' }
            ],
            checklist: [
                'Conozco las 7 fuentes de innovación de Drucker',
                'Puedo diseñar un programa de intrapreneurship',
                'Completé la autoevaluación de la Unidad 2',
                'Recibí mi plan de refuerzo personalizado'
            ],
            assignment: {
                title: 'Diseño de Programa de Innovación Abierta',
                type: 'presentacion',
                description: 'Diseña una estrategia de Innovación Abierta para una empresa real o ficticia del sector tecnológico. Incluye mecanismos de transferencia tecnológica, acuerdos de IP y un roadmap de 6 meses con métricas de éxito.',
                deliverables: [
                    'Presentación de 10 - 15 diapositivas con narrativa clara.',
                    'Propuesta de ecosistema de partners (startups, universidades, centros de investigación).',
                    'Análisis de riesgos de IP y mecanismos de mitigación.'
                ],
                format: 'Presentación PPT o PDF',
                deadline: 'Semana 8'
            },
            hasReferences: true
        },

        9: {
            id: 9, unit: 3, title: 'Las 5 Fuerzas de Porter en la Industria del Software',
            objective: 'Evaluar el atractivo y la intensidad competitiva de la industria del software mediante el modelo de Porter.',
            caseStudy: {
                title: 'Salesforce vs. el tsunami No-Code',
                company: 'Salesforce',
                summary: 'Salesforce domina el mercado CRM SaaS desde 1999. En 2020, plataformas No-Code/Low-Code como Airtable, Bubble y Webflow permitieron a pequeñas empresas construir CRMs personalizados sin programadores. Esto representó una Amenaza de Sustitutos en el modelo de Porter. Adicionalmente, la Rivalidad entre Competidores se intensificó con Microsoft Dynamics, HubSpot y Zoho. El Poder de Proveedores se concentró en AWS, Azure y GCP. Los Compradores (usuarios) ganaron poder porque el costo de cambio entre SaaS disminuyó. Salesforce respondió adquiriendo Slack y lanzando Einstein AI, diferenciándose por integración profunda.',
                questions: [
                    '¿Cuál de las 5 fuerzas es la más amenazante para Salesforce hoy?',
                    '¿Por qué el poder de los compradores es alto en SaaS?',
                    '¿Qué estrategia de mitigación aplicó Salesforce?'
                ]
            },
            theory: [
                {
                    title: '🏛️ Análisis de las 5 Fuerzas de Porter (Software)',
                    content: `
                        <table class="data-table">
                            <thead>
                                <tr><th>Fuerza</th><th>Impacto en Software</th><th>Estrategia de Mitigación</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Rivalidad entre Competidores</strong></td><td>Alta en mercados SaaS por bajos costos de distribución y replicabilidad de funciones.</td><td>Diferenciación por UX, IA integrada y ecosistema de apps (marketplace).</td></tr>
                                <tr><td><strong>Amenaza de Nuevos Entrantes</strong></td><td>Media-Alta: barreras técnicas bajas para desarrollar apps, pero altas para escalar.</td><td>Efectos de red, altos costos de cambio y marca establecida.</td></tr>
                                <tr><td><strong>Poder de Proveedores</strong></td><td>Concentrado en hyperscalers (AWS, Azure, GCP). Pueden subir precios o competir directamente.</td><td>Arquitecturas multicloud, contenedores agnósticos y negociación por volumen.</td></tr>
                                <tr><td><strong>Poder de Compradores</strong></td><td>Alto: los usuarios pueden cambiar de software fácilmente; existe información transparente.</td><td>Freemium, fidelización, integración profunda API y comunidad de usuarios.</td></tr>
                                <tr><td><strong>Amenaza de Sustitutos</strong></td><td>Creciente por plataformas No-Code/Low-Code que reemplazan desarrolladores.</td><td>Evolucionar hacia soluciones complejas a la medida con valor agregado (IA, análisis).</td></tr>
                            </tbody>
                        </table>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Insight estratégico:</strong> Una industria con las 5 fuerzas en "alta" intensidad es poco atractiva para nuevos entrantes, pero puede ser extremadamente rentable para quien logre diferenciarse y crear barreras de salida para sus clientes.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Matriz de 5 Fuerzas para SaaS',
                type: 'interactive',
                description: 'Construye la matriz de las 5 Fuerzas de Porter aplicada a una industria SaaS de tu elección.',
                interactiveType: 'five-forces',
                instructions: [
                    'Selecciona una industria SaaS (ej. email marketing, ERP, HR tech).',
                    'Califica cada fuerza de 1 (baja) a 5 (alta).',
                    'Propón una estrategia de mitigación para cada fuerza de riesgo.'
                ]
            },
            resources: [
                { title: 'Porter, M. E. (1980). Competitive Strategy', url: 'https://www.amazon.com/Competitive-Strategy-Techniques-Industries-Competitors/dp/0684841487' },
                { title: 'Porter, M. E. (1985). Competitive Advantage', url: 'https://www.amazon.com/Competitive-Advantage-Creating-Sustaining-Performance/dp/0684841460' },
                { title: 'Análisis SaaS Market - Gartner', url: 'https://www.gartner.com/en/newsroom/software' }
            ],
            checklist: [
                'Comprendo las 5 fuerzas de Porter',
                'Puedo aplicarlas a la industria del software',
                'Identifiqué estrategias de mitigación realistas',
                'Completé la matriz para un caso de estudio'
            ]
        },

        10: {
            id: 10, unit: 3, title: 'Estrategias de Ventaja Competitiva y Posicionamiento',
            objective: 'Seleccionar la estrategia genérica acorde a las capacidades del equipo de desarrollo.',
            caseStudy: {
                title: 'CrowdStrike: Diferenciación por IA en ciberseguridad',
                company: 'CrowdStrike',
                summary: 'CrowdStrike entró a un mercado de ciberseguridad saturado (Symantec, McAfee, Kaspersky). En lugar de competir en precio (líderazgo en costos), apostó por diferenciación tecnológica: algoritmos propietarios de IA para detección de amenazas en tiempo real, arquitectura nativa en la nube, y un modelo de agente ligero. Su estrategia fue Diferenciación + Enfoque: no atacaba a todas las empresas, sino a medianas y grandes que valoraban velocidad de respuesta. Aplicaron la Matriz de Ansoff (Desarrollo de Producto) para expandir de endpoint protection a identidad, nube y inteligencia de amenazas. En 2024, CrowdStrike vale más que Symantec en su apogeo.',
                questions: [
                    '¿Por qué CrowdStrike no eligió liderazgo en costos?',
                    '¿Qué estrategia de Ansoff usaron para expandirse de endpoint a cloud?',
                    '¿Podría una startup replicar esta estrategia hoy en otro mercado?'
                ]
            },
            theory: [
                {
                    title: '🎯 Matriz de Ansoff y Estrategias Genéricas',
                    content: `
                        <h4 style="color:var(--text-primary);margin:1rem 0 0.75rem;font-size:1rem;">Matriz de Ansoff (Expansión Estratégica)</h4>
                        <div class="ansoff-matrix" style="margin:1rem 0;">
                            <div class="ansoff-cell" data-ansoff="penetracion">
                                <h5>Penetración de Mercado</h5>
                                <p>Producto existente en mercado actual</p>
                            </div>
                            <div class="ansoff-cell" data-ansoff="desarrollo-mercado">
                                <h5>Desarrollo de Mercado</h5>
                                <p>Producto existente en mercado nuevo</p>
                            </div>
                            <div class="ansoff-cell" data-ansoff="desarrollo-producto">
                                <h5>Desarrollo de Producto</h5>
                                <p>Producto nuevo en mercado actual</p>
                            </div>
                            <div class="ansoff-cell" data-ansoff="diversificacion">
                                <h5>Diversificación</h5>
                                <p>Producto nuevo en mercado nuevo</p>
                            </div>
                        </div>
                        <div id="ansoffDetail" class="ansoff-detail" style="display:none;">
                            <h4 id="ansoffDetailTitle"></h4>
                            <p id="ansoffDetailText"></p>
                        </div>
                        <h4 style="color:var(--text-primary);margin:1.5rem 0 0.75rem;font-size:1rem;">Estrategias Genéricas de Porter</h4>
                        <ul class="content-list">
                            <li><strong>Liderazgo en Costos:</strong> Ser el productor de menor costo de la industria. En software: automatización, infraestructura eficiente, operaciones lean. Ejemplo: Canva vs. Adobe (precio accesible).</li>
                            <li><strong>Diferenciación:</strong> Ofrecer algo único percibido como valioso. En software: UX superior, IA integrada, comunidad vibrante. Ejemplo: Figma vs. Sketch (colaboración en tiempo real).</li>
                            <li><strong>Enfoque (Nicho):</strong> Concentrarse en un segmento específico. En software: herramientas solo para desarrolladores de blockchain, o solo para clínicas veterinarias.</li>
                        </ul>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Blue Ocean Strategy:</strong> En lugar de competir en mares rojos (mercados saturados), crear mercados nuevos donde no haya competencia. Ejemplo: Zoom no compitió con Skype en consumo; creó el mercado de videollamadas enterprise fáciles.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Matriz Ansoff Interactiva',
                type: 'interactive',
                description: 'Selecciona una estrategia Ansoff y aplica las estrategias genéricas de Porter a un caso de expansión tecnológica.',
                interactiveType: 'ansoff',
                instructions: [
                    'Elige una empresa tech conocida.',
                    'Haz clic en cada celda Ansoff para ver su definición y un ejemplo.',
                    'Determina cuál estrategia genérica acompaña cada movimiento.'
                ]
            },
            resources: [
                { title: 'Porter, M. E. (1985). Competitive Advantage', url: 'https://www.amazon.com/Competitive-Advantage-Creating-Sustaining-Performance/dp/0684841460' },
                { title: 'Kim & Mauborgne (2005). Blue Ocean Strategy', url: 'https://www.blueoceanstrategy.com/' },
                { title: 'Ansoff, H. I. (1957). Strategies for Diversification', url: 'https://hbr.org/2007/09/strategies-for-diversification' }
            ],
            checklist: [
                'Entiendo las 4 estrategias de Ansoff',
                'Puedo diferenciar Liderazgo en Costos vs. Diferenciación',
                'Identifiqué un Océano Azul en el mercado tech actual',
                'Apliqué la matriz a un caso de estudio real'
            ]
        },

        11: {
            id: 11, unit: 3, title: 'I+D+i y Propiedad Intelectual en Software',
            objective: 'Diseñar la estrategia de I+D+i corporativa y proteger activos intangibles mediante patentes, derechos de autor y secretos industriales.',
            caseStudy: {
                title: 'AI Medical: Protegiendo redes neuronales en Colombia',
                company: 'AI Medical Startup',
                summary: 'Una startup colombiana desarrolló algoritmos de redes neuronales para diagnóstico de radiografías pulmonares. El dilema: ¿patentar el algoritmo (difícil en software, especialmente en jurisdicciones que excluyen "programas de computador" como tal) o protegerlo como secreto industrial? Decidieron un enfoque híbrido: patentaron el método de procesamiento de imágenes médicas implementado por ordenador (que resuelve un problema técnico específico), registraron el código fuente como obra literaria ante la Dirección Nacional de Derecho de Autor, y mantuvieron como secreto industrial los pesos entrenados del modelo y el dataset de entrenamiento. Este triple escudo les permitió levantar ronda Serie A con la IP como activo garantizable.',
                questions: [
                    '¿Por qué patentar el método y no el código?',
                    '¿Qué ventaja tiene el registro de derecho de autor si ya existe protección automática?',
                    '¿Cuándo es mejor secreto industrial que patente?'
                ]
            },
            theory: [
                {
                    title: '🛡️ Protección de Propiedad Intelectual en Software',
                    content: `
                        <div style="display:grid;grid-template-columns:1fr;gap:1rem;margin:1rem 0;">
                            <div class="def-box" style="border-left-color:var(--accent-blue)">
                                <h4 style="color:var(--accent-blue)">Derechos de Autor (Software Copyright)</h4>
                                <p><strong>¿Qué protege?</strong> La expresión del código fuente y objeto. No protege la idea, el algoritmo o la funcionalidad.<br><strong>¿Cómo se obtiene?</strong> Automático al crear la obra. El registro ante la Dirección Nacional de Derecho de Autor (Colombia) o similar en otros países otorga prueba fehaciente de autoría y fecha.<br><strong>Ventaja:</strong> Protege contra copia directa del código.</p>
                            </div>
                            <div class="def-box" style="border-left-color:var(--accent-magenta)">
                                <h4 style="color:var(--accent-magenta)">Patente de Invención</h4>
                                <p><strong>¿Qué protege?</strong> Invenciones implementadas por ordenador que resuelvan un problema técnico no obvio con aplicación industrial. No el software "como tal", sino el método técnico.<br><strong>Ejemplo patentable:</strong> "Método de compresión de imágenes médicas mediante red neuronal convolucional optimizada para baja latencia."<br><strong>Ventaja:</strong> Protege contra ingeniería inversa y copia funcional, incluso con código diferente.</p>
                            </div>
                            <div class="def-box" style="border-left-color:var(--accent-amber)">
                                <h4 style="color:var(--accent-amber)">Secreto Industrial</h4>
                                <p><strong>¿Qué protege?</strong> Información confidencial que otorga ventaja competitiva: algoritmos propietarios, fórmulas, datasets, pesos de modelos ML, procesos internos.<br><strong>Requisito:</strong> Medidas razonables de confidencialidad (NDAs, controles de acceso, cifrado).<br><strong>Ejemplo:</strong> El algoritmo de recomendación de TikTok, la fórmula de Coca-Cola.<br><strong>Ventaja:</strong> No expira (mientras se mantenga secreto). No requiere registro público.</p>
                            </div>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Estrategia recomendada para startups de software:</strong> Registro de derecho de autor (bajo costo, prueba de autoría) + Patente de invención del método (si aplica y es viable) + Secreto industrial para los activos clave que no se pueden patentar fácilmente.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Estrategia de Protección IP',
                type: 'interactive',
                description: 'Diseña una estrategia de protección de propiedad intelectual para un software de IA generativa.',
                interactiveType: 'ip-strategy',
                instructions: [
                    'Identifica qué partes del sistema son patentables.',
                    'Determina qué partes deben ser secreto industrial.',
                    'Planifica el registro de derecho de autor del código.'
                ]
            },
            resources: [
                { title: 'WIPO - Guía de PI para Software', url: 'https://www.wipo.int/patents/en/' },
                { title: 'Dirección Nacional de Derecho de Autor (Colombia)', url: 'https://www.dnda.gov.co/' },
                { title: 'Superintendencia de Industria y Comercio - Patentes', url: 'https://www.sic.gov.co/' }
            ],
            checklist: [
                'Diferencio derecho de autor, patente y secreto industrial',
                'Puedo identificar qué es patentable en software',
                'Diseñé una estrategia IP triple escudo',
                'Conozco los organismos de registro en Colombia'
            ]
        },

        12: {
            id: 12, unit: 3, title: 'Matrices Tecnológicas y Evaluación',
            objective: 'Construir matrices de portafolio tecnológico para priorizar inversiones en proyectos de ingeniería.',
            caseStudy: {
                title: 'Grupo Logístico: ¿Invertir, mantener o desinvertir en 15 tecnologías?',
                company: 'Grupo Logístico Andino',
                summary: 'Un grupo logístico con operaciones en 5 países tenía 15 sistemas tecnológicos acumulados en 20 años: desde un TMS legacy en COBOL hasta una app móvil de última milla en Flutter. El CTO debía presentar al comité directivo una matriz de priorización de inversiones tecnológicas para el próximo trienio. Usaron la Matriz de McFarlan para clasificar cada sistema en: Estratégico (crítico hoy y futuro), De Apoyo (crítico hoy, no futuro), Operativo (no crítico hoy ni futuro) y De Transición (no crítico hoy, pero potencial estratégico). La matriz les permitió justificar la inversión de $4M en reemplazo del TMS y la modernización de la app móvil, mientras postergaban la migración de 3 sistemas de apoyo.',
                questions: [
                    '¿Por qué McFarlan y no solo un listado de prioridades?',
                    '¿Qué sistemas deben recibir la mayor inversión según la matriz?',
                    '¿Cómo se justifica desinvertir en un sistema que "todavía funciona"?'
                ]
            },
            theory: [
                {
                    title: '📊 Matriz de Portafolio Tecnológico (McFarlan)',
                    content: `
                        <table class="data-table">
                            <thead>
                                <tr><th>Categoría</th><th>Impacto Operación Actual</th><th>Impacto Estrategia Futura</th><th>Acción</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong style="color:var(--accent-green)">Estratégico</strong></td><td>Alto</td><td>Alto</td><td><strong>Invertir agresivamente.</strong> Sistemas que mantienen la operación y definen la competitividad futura.</td></tr>
                                <tr><td><strong style="color:var(--accent-amber)">De Apoyo</strong></td><td>Alto</td><td>Bajo</td><td><strong>Mantener eficiente.</strong> No invertir en innovación; buscar reducir costos de operación.</td></tr>
                                <tr><td><strong style="color:var(--accent-blue)">De Transición</strong></td><td>Bajo</td><td>Alto</td><td><strong>Invertir selectivamente.</strong> Experimentar; son apuestas tecnológicas.</td></tr>
                                <tr><td><strong style="color:var(--text-muted)">Operativo</strong></td><td>Bajo</td><td>Bajo</td><td><strong>Desinvertir o externalizar.</strong> Migrar a SaaS estándar o descontinuar.</td></tr>
                            </tbody>
                        </table>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Matriz de Ansoff aplicada a tecnología:</strong> También se usa para decidir si una tecnología existente se expande a nuevos mercados (Desarrollo de Mercado) o si se desarrolla una tecnología nueva para el mercado actual (Desarrollo de Producto).
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Matriz McFarlan para 5 Sistemas',
                type: 'interactive',
                description: 'Clasifica 5 sistemas de una empresa real en la matriz de McFarlan y justifica las inversiones.',
                interactiveType: 'mcfarlan',
                instructions: [
                    'Lista 5 sistemas tecnológicos de una empresa que conozcas.',
                    'Califica impacto actual y futuro de cada uno (1-5).',
                    'Ubícalos en la matriz y define la acción recomendada.'
                ]
            },
            resources: [
                { title: 'McFarlan, F. W. (1984). Information Technology Changes the Way You Compete', url: 'https://hbr.org/1984/05/information-technology-changes-the-way-you-compete' },
                { title: 'Matriz de Portafolio Tecnológico - Guía práctica (Mendeley)', url: 'https://www.mendeley.com/' }
            ],
            checklist: [
                'Entiendo las 4 categorías de la matriz McFarlan',
                'Puedo clasificar sistemas según impacto actual y futuro',
                'Completé la autoevaluación de la Unidad 3',
                'Recibí mi plan de refuerzo personalizado'
            ],
            assignment: {
                title: 'Estrategia de Protección IP y Posicionamiento',
                type: 'investigacion',
                description: 'Selecciona una startup tecnológica (real o hipotética) y diseña su estrategia integral de protección de propiedad intelectual. Analiza qué partes se patentan, cuáles se protegen por derecho de autor y cuáles permanecen como secreto industrial. Incluye un análisis de 5 fuerzas de Porter y una matriz de Ansoff.',
                deliverables: [
                    'Informe ejecutivo de 2,000 - 3,000 palabras.',
                    'Matriz de Ansoff y mapa de 5 fuerzas (imágenes o diagramas).',
                    'Estrategia de triple escudo de protección IP con justificación legal y comercial.'
                ],
                format: 'Documento PDF',
                deadline: 'Semana 12'
            },
            hasReferences: true
        },

        13: {
            id: 13, unit: 4, title: 'Vigilancia Tecnológica e Inteligencia Competitiva',
            objective: 'Captar, analizar y difundir información clave sobre señales de cambio, competidores y tecnologías emergentes.',
            caseStudy: {
                title: 'Aseguradora Digital: Alertas de patentes sobre telemática',
                company: 'Seguros Digital S.A.',
                summary: 'Una aseguradora digital en México implementó un sistema de vigilancia tecnológica para detectar patentes de competidores en seguros basados en telemática (uso de datos de vehículos para personalizar primas). Detectaron que una competidora estadounidense había patentado un método de scoring de riesgo basado en patrones de aceleración y frenado. Esto les permitió: (1) decidir no invertir $2M en desarrollar algo similar, (2) negociar una licencia de la patente, y (3) pivotar hacia un modelo basado en datos de smartphone (no de vehículo), evitando infringir la patente. La vigilancia les ahorró millones y aceleró su time-to-market.',
                questions: [
                    '¿Por qué la vigilancia de patentes es inteligencia competitiva y no solo curiosidad técnica?',
                    '¿Qué habría pasado si no hubieran detectado la patente?',
                    '¿Qué norma internacional rige la vigilancia tecnológica?'
                ]
            },
            theory: [
                {
                    title: '🔭 Ciclo de Vigilancia Tecnológica (UNE 166006)',
                    content: `
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem">
                            La Norma UNE 166006:2011 establece los requisitos para un Sistema de Gestión de la I+D+i que incluya Vigilancia Tecnológica e Inteligencia Competitiva. El ciclo consta de 5 fases:
                        </p>
                        <ul class="content-list">
                            <li><strong>1. Identificación de FCV (Factores Críticos de Vigilancia):</strong> ¿Qué necesitamos saber? Ej: patentes de competidores en IA médica.</li>
                            <li><strong>2. Búsqueda:</strong> ¿Dónde buscamos? Bases de patentes, literatura científica, conferencias, redes de expertos.</li>
                            <li><strong>3. Análisis:</strong> ¿Qué significa lo encontrado? Clasificación, tendencias, mapas de competidores.</li>
                            <li><strong>4. Valoración:</strong> ¿Qué impacto tiene para nosotros? Riesgos, oportunidades, prioridades.</li>
                            <li><strong>5. Difusión:</strong> ¿Quién debe saberlo y qué debe hacer? Boletines, alertas, informes estratégicos.</li>
                        </ul>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Vigilancia Tecnológica (VT) vs. Inteligencia Competitiva (IC):</strong> La VT capta y analiza información técnica (señales de cambio, nuevas tecnologías, patentes). La IC transforma esa información en <strong>decisiones estratégicas de negocio</strong>: ¿entramos a este mercado?, ¿adquirimos esta startup?, ¿licenciamos esta patente? VT es el ojo; IC es el cerebro.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Definición de FCV',
                type: 'interactive',
                description: 'Define los Factores Críticos de Vigilancia para una empresa de software de tu elección.',
                interactiveType: 'fvc-builder',
                instructions: [
                    'Elige una empresa tech (real o ficticia).',
                    'Define 5 FCV: qué tecnología, qué competidor, qué tendencia, etc.',
                    'Para cada FCV, define la fuente de búsqueda y el responsable.'
                ]
            },
            resources: [
                { title: 'UNE 166006:2011 - Sistemas de Gestión de I+D+i', url: 'https://www.une.org/' },
                { title: 'AENOR - Guía de Vigilancia Tecnológica', url: 'https://www.aenor.com/' },
                { title: 'SCIP - Inteligencia Competitiva', url: 'https://www.scip.org/' }
            ],
            checklist: [
                'Conozco las 5 fases del ciclo de vigilancia',
                'Puedo diferenciar VT de IC',
                'Definí FCV para una empresa de software',
                'Conozco la norma UNE 166006'
            ]
        },

        14: {
            id: 14, unit: 4, title: 'Búsqueda Sistemática en Bases de Datos de Patentes',
            objective: 'Ejecutar ecuaciones de búsqueda avanzada en bases de datos internacionales de patentes.',
            caseStudy: {
                title: 'Cifrado Homomórfico: Validando Freedom to Operate',
                company: 'CryptoSoft Labs',
                summary: 'Un equipo de criptografía desarrolló una implementación eficiente de cifrado homomórfico (permitir operaciones sobre datos cifrados sin descifrarlos) para un cliente bancario. Antes del lanzamiento, el departamento legal exigió un estudio de Libertad de Operación (FTO). Usando Google Patents y Espacenet, construyeron una ecuación booleana que combinó términos en inglés y español con códigos CPC (H04L9/00 para criptografía). Descubrieron 3 patentes vivas en EE.UU. y Europa que podrían infringirse. El cliente decidió no lanzar en esos mercados y pivotar hacia una arquitectura de "multi-party computation" que no caía dentro de las claims de las patentes encontradas. El FTO evitó una demanda potencial de $50M+.',
                questions: [
                    '¿Qué es Freedom to Operate (FTO) y por qué es crítico antes de lanzar?',
                    '¿Por qué usar CPC en lugar de solo palabras clave?',
                    '¿Qué herramientas gratuitas existen para búsqueda de patentes?'
                ]
            },
            theory: [
                {
                    title: '🔍 Guía Práctica de Búsqueda con Ecuaciones Booleanas',
                    content: `
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem">
                            Las ecuaciones booleanas permiten combinar términos de búsqueda para aumentar precisión (AND), amplitud (OR) o exclusión (NOT).
                        </p>
                        <div class="boolean-builder">
                            <h5 style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">Ejemplo: IA aplicada a detección de fraude en pagos</h5>
                            <div class="boolean-preview" id="booleanPreview">
("artificial intelligence" OR "machine learning" OR "deep learning") AND ("fraud detection" OR "anomaly detection") AND ("payment processing" OR "credit card") AND CPC = G06Q20/40
                            </div>
                            <p style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.75rem;line-height:1.5">
                                <strong>Operadores:</strong> <code style="background:var(--bg-primary);padding:0.15rem 0.4rem;border-radius:4px;">AND</code> (ambos términos), <code style="background:var(--bg-primary);padding:0.15rem 0.4rem;border-radius:4px;">OR</code> (cualquiera), <code style="background:var(--bg-primary);padding:0.15rem 0.4rem;border-radius:4px;">NOT</code> (excluir).<br>
                                <strong>Códigos CPC:</strong> Clasificación Cooperativa de Patentes. Estandariza la clasificación temática global superando barreras de idioma.<br>
                                <strong>Herramientas:</strong> Google Patents, Espacenet (EPO), Lens.org, IEEE Xplore.
                            </p>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Tip profesional:</strong> Siempre busca en inglés primero (la mayoría de patentes se redactan en inglés) y luego valida en el idioma local. Usa comillas para frases exactas.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Constructor de Ecuaciones Booleanas',
                type: 'interactive',
                description: 'Construye una ecuación de búsqueda booleana para un tema de tu interés y simula su ejecución.',
                interactiveType: 'boolean-builder',
                instructions: [
                    'Elige un tema (ej. blockchain en supply chain, IA en agricultura).',
                    'Selecciona términos sinónimos con OR.',
                    'Conecta conceptos con AND.',
                    'Añade un código CPC relevante si lo conoces.'
                ]
            },
            resources: [
                { title: 'Google Patents', url: 'https://patents.google.com/' },
                { title: 'Espacenet - EPO', url: 'https://worldwide.espacenet.com/' },
                { title: 'Lens.org', url: 'https://www.lens.org/' }
            ],
            checklist: [
                'Domino los operadores booleanos AND, OR, NOT',
                'Puedo construir una ecuación de búsqueda para patentes',
                'Conozco al menos 3 bases de datos de patentes gratuitas',
                'Entiendo la importancia del estudio FTO'
            ]
        },

        15: {
            id: 15, unit: 4, title: 'Tecnologías Emergentes, Radares y Prospectiva',
            objective: 'Analizar el impacto de tecnologías disruptivas emergentes usando herramientos de prospectiva.',
            caseStudy: {
                title: 'WebDev Corp: ¿Es momento de integrar IA Generativa?',
                company: 'WebDev Corp',
                summary: 'WebDev Corp, una empresa de desarrollo web con 80 empleados, evaluó en 2023 si debía integrar herramientas de IA generativa (Copilot, ChatGPT) en su flujo de trabajo. Usaron el Gartner Hype Cycle for Emerging Tech 2023: la IA Generativa estaba en el "Pico de Expectativas Sobredimensionadas". Esto significaba que el entusiasmo era masivo, pero muchas implementaciones fallarían en los próximos 2 años. Decidieron una estrategia moderada: adoptar IA generativa como asistente de código (uso interno, bajo riesgo) pero no ofrecer "sitios web generados por IA" a clientes todavía (alto riesgo, expectativas irreales). En 2025, cuando la tecnología entró a la "Rampa de Consolidación", lanzaron su producto de "landing pages con IA" con éxito comercial.',
                questions: [
                    '¿Por qué no lanzaron el producto de IA al cliente en 2023?',
                    '¿En qué fase del Hype Cycle es más seguro adoptar una tecnología?',
                    '¿Qué métodos de prospectiva adicionales se pueden usar?'
                ]
            },
            theory: [
                {
                    title: '📡 Gartner Hype Cycle y Métodos de Prospectiva',
                    content: `
                        <div class="hype-cycle-container" id="hypeCycleContainer">
                            <svg class="hype-curve" viewBox="0 0 600 250" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="hypeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:var(--accent-cyan);stop-opacity:0.3" />
                                        <stop offset="50%" style="stop-color:var(--accent-magenta);stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:var(--accent-green);stop-opacity:0.3" />
                                    </linearGradient>
                                </defs>
                                <path d="M 0 200 Q 50 200, 80 180 Q 110 120, 200 40 Q 250 10, 300 80 Q 350 160, 400 140 Q 450 120, 500 100 Q 550 90, 600 85" 
                                      fill="none" stroke="url(#hypeGradient)" stroke-width="4" stroke-linecap="round"/>
                                <circle cx="80" cy="180" r="8" fill="var(--accent-cyan)" class="hype-point" data-phase="trigger"/>
                                <circle cx="200" cy="40" r="8" fill="var(--accent-magenta)" class="hype-point" data-phase="peak"/>
                                <circle cx="300" cy="80" r="8" fill="var(--accent-rose)" class="hype-point" data-phase="trough"/>
                                <circle cx="450" cy="120" r="8" fill="var(--accent-amber)" class="hype-point" data-phase="slope"/>
                                <circle cx="580" cy="88" r="8" fill="var(--accent-green)" class="hype-point" data-phase="plateau"/>
                            </svg>
                            <div class="hype-labels" style="position:absolute;bottom:10px;left:0;width:100%;">
                                <span class="hype-label">Innovation<br>Trigger</span>
                                <span class="hype-label">Peak of Inflated<br>Expectations</span>
                                <span class="hype-label">Trough of<br>Disillusionment</span>
                                <span class="hype-label">Slope of<br>Enlightenment</span>
                                <span class="hype-label">Plateau of<br>Productivity</span>
                            </div>
                        </div>
                        <div class="hype-info" id="hypeInfo" style="display:none;">
                            <h4 id="hypeTitle"></h4>
                            <p id="hypeDesc"></p>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1.5rem">
                            <strong>Otros métodos de prospectiva:</strong>
                        </p>
                        <ul class="content-list">
                            <li><strong>Método Delphi:</strong> Consulta iterativa a expertos hasta alcanzar consenso sobre el futuro de una tecnología.</li>
                            <li><strong>Análisis de Escenarios:</strong> Construir 3-4 narrativas plausibles del futuro (optimista, pesimista, disruptivo, estable).</li>
                            <li><strong>Radares Tecnológicos:</strong> Mapa visual que ubica tecnologías según su madurez, impacto y tiempo de adopción esperado.</li>
                        </ul>
                    `
                }
            ],
            lab: {
                title: 'Laboratorio: Radar Tecnológico a 3, 5 y 10 años',
                type: 'interactive',
                description: 'Construye un radar de tecnologías emergentes para una empresa de desarrollo web.',
                interactiveType: 'radar-tech',
                instructions: [
                    'Selecciona 8 tecnologías emergentes relevantes.',
                    'Clasifícalas en: Adoptar ahora, Evaluar, Observar, Evitar.',
                    'Justifica cada decisión basándote en el Hype Cycle.'
                ]
            },
            resources: [
                { title: 'Gartner Hype Cycle for Emerging Technologies', url: 'https://www.gartner.com/en/newsroom/press-releases' },
                { title: 'ThoughtWorks Technology Radar', url: 'https://www.thoughtworks.com/radar' },
                { title: 'UNESCO - Métodos de Prospectiva Tecnológica', url: 'https://en.unesco.org/' }
            ],
            checklist: [
                'Comprendo las 5 fases del Hype Cycle',
                'Puedo ubicar una tecnología en el Hype Cycle actual',
                'Conozco 3 métodos de prospectiva adicionales',
                'Diseñé un radar tecnológico para una empresa'
            ]
        },

        16: {
            id: 16, unit: 4, title: 'Proyecto Final Integrador y Evaluación',
            objective: 'Consolidar una propuesta completa de gestión, estrategia e innovación tecnológica basada en vigilancia competitiva.',
            caseStudy: {
                title: 'Plan Maestro de Innovación Tecnológica',
                company: 'Proyecto Integrador',
                summary: 'El proyecto final integra todo el curso: los estudiantes deben seleccionar una oportunidad de mercado (semana 1-4), estructurar un proceso de innovación con Stage-Gate (semana 5-8), definir una estrategia de IP y posicionamiento (semana 9-12), y construir un boletín de vigilancia tecnológica (semana 13-16). El entregable es un Plan Maestro de Innovación Tecnológica en PDF que incluye: (1) Clasificación de la innovación, (2) Embudo Stage-Gate personalizado, (3) Matriz de 5 Fuerzas, (4) Estrategia de protección IP, (5) Ecuación booleana de búsqueda de patentes, (6) Radar tecnológico a 3-5 años, y (7) Propuesta de MVP. Este proyecto simula el rol real de un Director de Innovación Tecnológica en una empresa de software.',
                questions: [
                    '¿Cómo se articulan las 4 unidades en una propuesta coherente?',
                    '¿Qué métricas usarías para medir el éxito de este plan en 1 año?',
                    '¿Cuál fue el aprendizaje más valioso del curso para tu carrera?'
                ]
            },
            theory: [
                {
                    title: '🎓 Síntesis del Curso GIT01',
                    content: `
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-bottom:1rem">
                            Has recorrido un camino de 16 semanas que transforma tu visión desde "desarrollador de software" a "gestor de innovación tecnológica". Este es el mapa mental integrador:
                        </p>
                        <div style="background:var(--bg-tertiary);border-radius:var(--radius-md);padding:1.25rem;margin:1rem 0;">
                            <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.8;">
                                <strong style="color:var(--accent-cyan)">Unidad 1:</strong> Entendiste que la innovación no es solo tecnología; es la introducción exitosa en el mercado. Diferencias entre invención, innovación, tipologías y ciclos de vida.<br><br>
                                <strong style="color:var(--accent-magenta)">Unidad 2:</strong> Aprendiste a estructurar procesos formales (Stage-Gate), abrir la innovación (Open Innovation), diseñar con usuarios (Design Thinking) y experimentar rápido (Lean Startup).<br><br>
                                <strong style="color:var(--accent-amber)">Unidad 3:</strong> Analizaste la competitividad (Porter), elegiste estrategias de expansión (Ansoff) y protegiste tus activos intangibles (IP, patentes, secretos).<br><br>
                                <strong style="color:var(--accent-green)">Unidad 4:</strong> Te convertiste en vigilante tecnológico: buscas patentes, lees el Hype Cycle, construyes radares y tomas decisiones estratégicas basadas en inteligencia competitiva.
                            </p>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin-top:1rem">
                            <strong>Tu próximo paso:</strong> Aplica este conocimiento en tu próximo proyecto, startup o empresa. La innovación no se memoriza; se practica.
                        </p>
                    `
                }
            ],
            lab: {
                title: 'Autoevaluación Práctica Unidad 4',
                type: 'quiz',
                description: 'Responde el test final para evaluar tu dominio completo de la asignatura. Recibirás tu diagnóstico final y certificado de progreso.',
                quizId: 'quiz-u4'
            },
            resources: [
                { title: 'Plantilla de Plan de Innovación Tecnológica (OCDE)', url: 'https://www.oecd.org/sti/inno/' },
                { title: 'MINCIT Colombia - Innovación y Desarrollo Empresarial', url: 'https://www.mincit.gov.co/' }
            ],
            checklist: [
                'Completé el test de autoevaluación Unidad 4',
                'Revisé mi diagnóstico final y plan de refuerzo',
                'Tengo claro mi mapa de aprendizaje para continuar'
            ],
            assignment: {
                title: 'Plan Maestro de Innovación Tecnológica',
                type: 'video',
                description: 'Elabora un Plan Maestro de Innovación Tecnológica integrando los 4 módulos del curso. Graba un video de 8-10 minutos donde defiendas tu propuesta ante un comité evaluador (simulado). Incluye: clasificación de innovación, embudo Stage-Gate, estrategia de IP, ecuación booleana de búsqueda de patentes y radar tecnológico a 3-5 años.',
                deliverables: [
                    'Video de 8 - 10 minutos (MP4 o link de YouTube/Vimeo no listado).',
                    'Anexo PDF con los gráficos, ecuaciones y radares presentados.',
                    'Bibliografía en formato APA 7ª edición.'
                ],
                format: 'Video + Documento PDF',
                deadline: 'Semana 16'
            },
            hasReferences: true
        }
    },

    quizzes: {
        'quiz-u1': {
            title: 'Autoevaluación Unidad 1: Conceptos Claves',
            unit: 1,
            questions: [
                {
                    id: 'u1q1',
                    text: 'Un laboratorio universitario desarrolla un algoritmo inédito de compresión de datos con una eficiencia del 99%. Sin embargo, el código permanece archivado en un servidor sin llegar a ningún producto comercial ni ser utilizado por usuarios. ¿Cómo se clasifica adecuadamente esta invención?',
                    options: [
                        'Es una Innovación Disruptiva Comercializada',
                        'Es una Invención Científico-Técnica (Aún no es Innovación)',
                        'Es una Innovación Incremental de Mercado',
                        'Es un Modelo de Negocio Abierto'
                    ],
                    correct: 1,
                    feedback: 'Para que exista Innovación se requiere que el desarrollo técnico se introduzca con éxito en el mercado o en la práctica operacional; sin esto, permanece como una Invención.'
                },
                {
                    id: 'u1q2',
                    text: 'La transición de la fotografía analógica basada en rollos de película de haluro de plata hacia la fotografía digital basada en sensores CCD/CMOS es un ejemplo clásico de:',
                    options: [
                        'Innovación Incremental de Mantenimiento',
                        'Innovación Disruptiva y Radical',
                        'Mejora Continua de Procesos',
                        'Innovación de Empaque Comercial'
                    ],
                    correct: 1,
                    feedback: 'La fotografía digital reemplazó completamente la física analógica, constituyendo una innovación radical y disruptiva.'
                },
                {
                    id: 'u1q3',
                    text: 'Cuando una tecnología de software se encuentra en la parte superior plana de su "Curva en S" (Fase de Madurez/Saturación), los incrementos adicionales en presupuesto de I+D generan:',
                    options: [
                        'Rendimientos exponencialmente superiores.',
                        'Mejoras de rendimiento marginales o decrecientes, señalando la necesidad de preparar la discontinuidad tecnológica.',
                        'Un retorno automático del 1000% sobre la inversión.',
                        'La eliminación inmediata de todos los competidores.'
                    ],
                    correct: 1,
                    feedback: 'Al alcanzar el límite físico o teórico de la curva en S, los esfuerzos adicionales de I+D producen mejoras mínimas, marcando el momento de migrar a una nueva curva S.'
                },
                {
                    id: 'u1q4',
                    text: 'Mover una aplicación monolítica existente a una arquitectura de microservicios usando los mismos lenguajes de programación representa una:',
                    options: [
                        'Innovación Arquitectónica',
                        'Innovación de Mercadotecnia',
                        'Patente de Invención Hardware',
                        'Estrategia de Licenciamiento SaaS'
                    ],
                    correct: 0,
                    feedback: 'La innovación arquitectónica reconfigura las relaciones entre componentes sin alterar los componentes individuales.'
                },
                {
                    id: 'u1q5',
                    text: 'En la práctica profesional del ingeniero de software, la gestión de la tecnología implica:',
                    options: [
                        'Únicamente escribir líneas de código sin entender el mercado.',
                        'Alinear el desarrollo de software con las necesidades estratégicas, operacionales y de competitividad del entorno empresarial.',
                        'Evitar el uso de cualquier herramienta externa.',
                        'Comprar únicamente equipos de hardware usados.'
                    ],
                    correct: 1,
                    feedback: 'La gestión de tecnología articula la ingeniería con la estrategia de negocio y la creación de valor en el mercado.'
                }
            ]
        },
        'quiz-u2': {
            title: 'Autoevaluación Unidad 2: Gestión de la Innovación',
            unit: 2,
            questions: [
                {
                    id: 'u2q1',
                    text: 'En el modelo Stage-Gate de Robert Cooper, las "Gate Reviews" (Compuertas de Decisión) cumplen la función de:',
                    options: [
                        'Aumentar el presupuesto sin revisar avances.',
                        'Puntos de control donde la alta dirección evalúa la factibilidad y decide si el proyecto continua (Go), se cancela (Kill), se frena (Hold) o se repite (Recycle).',
                        'Lanzar el producto a producción sin hacer pruebas.',
                        'Eliminar el código fuente del proyecto.'
                    ],
                    correct: 1,
                    feedback: 'Las compuertas de decisión de Stage-Gate evalúan la factibilidad técnica y comercial para evitar inversiones en proyectos inviables.'
                },
                {
                    id: 'u2q2',
                    text: 'Una empresa de desarrollo de software publica una API abierta para que programadores externos creen complementos en su tienda de aplicaciones. Esta práctica corresponde a:',
                    options: [
                        'Innovación Cerrada Tradicional (Closed Innovation)',
                        'Innovación Abierta Outbound / Plataforma de Ecosistema',
                        'Infracción de Propiedad Intelectual',
                        'Secreto Industrial Estricto'
                    ],
                    correct: 1,
                    feedback: 'Abrir APIs para que terceros creen valor sobre la plataforma es una estrategia emblemática de Innovación Abierta.'
                },
                {
                    id: 'u2q3',
                    text: 'En la metodología Lean Startup, el propósito de construir un Producto Mínimo Viable (MVP) es:',
                    options: [
                        'Lanzar un producto final perfecto con 100% de funciones.',
                        'Iniciar el ciclo de aprendizaje validado con el mínimo esfuerzo e inversión posibles frente a clientes reales.',
                        'Demostrar la capacidad del servidor de base de datos.',
                        'Escribir la documentación completa de usuario de 500 páginas.'
                    ],
                    correct: 1,
                    feedback: 'El MVP busca maximizar el aprendizaje validado sobre las hipótesis de negocio consumiendo la menor cantidad de recursos.'
                },
                {
                    id: 'u2q4',
                    text: 'Según Peter Drucker, los "Cambios en la Percepción del Consumidor" representan:',
                    options: [
                        'Una fuente externa de oportunidades de innovación basada en transformaciones sociales y culturales.',
                        'Un problema técnico de compilación.',
                        'Una violación de patentes de software.',
                        'Un error en la base de datos NoSQL.'
                    ],
                    correct: 0,
                    feedback: 'Las alteraciones en las percepciones de la sociedad son una fuente clave de oportunidades para crear nuevos productos o servicios.'
                },
                {
                    id: 'u2q5',
                    text: 'La fase inicial de "Empatizar" en Design Thinking busca:',
                    options: [
                        'Programar la base de datos inmediatamente.',
                        'Comprender profundamente las necesidades, dolores y motivaciones reales de los usuarios finales en su contexto.',
                        'Definir el costo de la licencia de software.',
                        'Vender el producto antes de diseñarlo.'
                    ],
                    correct: 1,
                    feedback: 'La empatía con el usuario es el fundamento humano de Design Thinking para diseñar soluciones pertinentes.'
                }
            ]
        },
        'quiz-u3': {
            title: 'Autoevaluación Unidad 3: Gestión Estratégica',
            unit: 3,
            questions: [
                {
                    id: 'u3q1',
                    text: 'En la industria de aplicaciones móviles de software, la presencia de plataformas Low-Code/No-Code que permiten a no desarrolladores crear apps representa la fuerza de:',
                    options: [
                        'Poder de negociación de los proveedores de hardware',
                        'Amenaza de Productos o Servicios Sustitutos',
                        'Rivalidad entre desarrolladores de Java únicamente',
                        'Barrera de salida gubernamental'
                    ],
                    correct: 1,
                    feedback: 'El software Low-Code/No-Code ofrece una alternativa que sustituye el desarrollo tradicional de código.'
                },
                {
                    id: 'u3q2',
                    text: 'Si una empresa de software decide vender su software CRM existente en un nuevo país donde no operaba anteriormente, está aplicando la estrategia de:',
                    options: [
                        'Penetración de Mercado',
                        'Desarrollo de Mercado',
                        'Desarrollo de Producto',
                        'Diversificación Conglomerada'
                    ],
                    correct: 1,
                    feedback: 'Vender productos existentes en nuevos mercados geográficos o demográficos es la definición de Desarrollo de Mercado.'
                },
                {
                    id: 'u3q3',
                    text: 'En Colombia, la protección del Código Fuente de un programa de computador se otorga automáticamente mediante el régimen de:',
                    options: [
                        'Patente de Modelo de Utilidad',
                        'Derechos de Autor (Obra Literaria e Inmaterial)',
                        'Marca Comercial Registrada',
                        'Licencia Creative Commons sin registro'
                    ],
                    correct: 1,
                    feedback: 'El software está protegido por la legislación de Derechos de Autor como obra literaria.'
                },
                {
                    id: 'u3q4',
                    text: 'Un sistema informático cuya falla paraliza de inmediato las operaciones diarias de la empresa y cuyos nuevos desarrollos son críticos para la estrategia futura se ubica en la categoría de:',
                    options: [
                        'Sistema de Apoyo / Soporte',
                        'Sistema Estratégico',
                        'Sistema Desconectado',
                        'Sistema de Auditoría Externa'
                    ],
                    correct: 1,
                    feedback: 'La Matriz de McFarlan define como Sistemas Estratégicos a aquellos vitales tanto para la operación presente como para la competitividad futura.'
                },
                {
                    id: 'u3q5',
                    text: 'Una empresa de desarrollo adopta una estrategia de I+D "Seguidor Rápido" (Fast Follower). Esto significa que:',
                    options: [
                        'Es la primera en inventar la tecnología asumiendo todo el costo de investigación.',
                        'Monitorea al líder del mercado, aprende de sus errores y lanza rápidamente una versión mejorada o más competitiva.',
                        'No invierte en ninguna tecnología.',
                        'Cierra sus operaciones de desarrollo.'
                    ],
                    correct: 1,
                    feedback: 'La estrategia de Seguidor Rápido optimiza costos de I+D aprovechando la validación del mercado realizada por el pionero.'
                }
            ]
        },
        'quiz-u4': {
            title: 'Autoevaluación Unidad 4: Vigilancia Tecnológica',
            unit: 4,
            questions: [
                {
                    id: 'u4q1',
                    text: 'Al construir una ecuación de búsqueda de patentes en Google Patents, la inclusión del código CPC (Clasificación Cooperativa de Patentes) permite:',
                    options: [
                        'Aumentar el ruido de la búsqueda trayendo millones de documentos irrelevantes.',
                        'Acotar los resultados específicamente a la familia tecnológica y campo de aplicación exacto del invento independientemente del idioma.',
                        'Traducir el código a lenguaje C++.',
                        'Borrar las patentes encontradas.'
                    ],
                    correct: 1,
                    feedback: 'Los códigos CPC/CIP estandarizan la clasificación temática global superando las barreras del idioma.'
                },
                {
                    id: 'u4q2',
                    text: 'Una tecnología emergente se encuentra en el "Abismo de Desilusión" (Trough of Disillusionment). Esto indica que:',
                    options: [
                        'La tecnología ha desaparecido para siempre.',
                        'El entusiasmo inicial disminuyó al enfrentar dificultades de implementación, pero las empresas pioneras están refinando los verdaderos casos de uso.',
                        'El 100% de la población mundial la utiliza a diario.',
                        'Es el momento de comprar la empresa inventora.'
                    ],
                    correct: 1,
                    feedback: 'El Abismo de Desilusión es la etapa donde decae el interés superficial e inicia la maduración real de la tecnología.'
                },
                {
                    id: 'u4q3',
                    text: 'El estudio de Libertad de Operación (FTO) se ejecuta antes de lanzar un producto de software para:',
                    options: [
                        'Garantizar que la solución no infrinja patentes vigentes de terceros en los mercados donde operará.',
                        'Inhabilitar la conexión a internet de los servidores.',
                        'Aumentar los impuestos de importación.',
                        'Eliminar el código fuente.'
                    ],
                    correct: 0,
                    feedback: 'El FTO evita demandas multimillonarias por infracción de patentes de competidores.'
                },
                {
                    id: 'u4q4',
                    text: 'El ciclo de Vigilancia Tecnológica según la norma UNE 166006 inicia con:',
                    options: [
                        'La redacción del boletín final.',
                        'La identificación de los Factores Críticos de Vigilancia (FCV) y las necesidades de información de la organización.',
                        'La compra de servidores físicos.',
                        'La cancelación de la suscripción a bases de datos.'
                    ],
                    correct: 1,
                    feedback: 'La primera fase indispensable es definir qué se requiere vigilar (Factores Críticos de Vigilancia).'
                },
                {
                    id: 'u4q5',
                    text: 'La diferencia clave entre Vigilancia Tecnológica (VT) e Inteligencia Competitiva (IC) radica en que:',
                    options: [
                        'VT capta y analiza información técnica, mientras la IC transforma esa información en decisiones estratégicas de negocio.',
                        'Son exactamente lo mismo sin diferencia alguna.',
                        'VT es solo para hardware y IC es solo para software.',
                        'IC es ilegal en todos los países.'
                    ],
                    correct: 0,
                    feedback: 'La Vigilancia capta y procesa las señales; la Inteligencia interpreta y apoya la toma de decisiones directivas.'
                }
            ]
        }
    },

    references: {
        1: [
            'OCDE. (2018). <i>Manual de Oslo: Guía para la recogida e interpretación de datos sobre innovación</i> (4ª ed.). OECD Publishing. https://doi.org/10.1787/9789264302604-es',
            'Hidalgo Nuchera, A., Albors Garrigós, J., & Pezzotta, G. (2012). <i>Gestión de la innovación y la tecnología: Teoría, casos prácticos y dirección estratégica</i>. RA-MA Editorial.',
            'Tidd, J., & Bessant, J. R. (2021). <i>Managing Innovation: Integrating Technological, Market and Organizational Change</i> (7th ed.). Wiley.',
            'Schumpeter, J. A. (1942). <i>Capitalism, Socialism and Democracy</i>. Harper & Brothers.',
            'Henderson, R. M., & Clark, K. B. (1990). Architectural Innovation: The Reconfiguration of Existing Product Technologies and the Failure of Established Firms. <i>Administrative Science Quarterly, 35</i>(1), 9-30. https://doi.org/10.2307/2393549',
            'Christensen, C. M. (1997). <i>The Innovator\'s Dilemma: When New Technologies Cause Great Firms to Fail</i>. Harvard Business School Press.'
        ],
        2: [
            'Cooper, R. G. (2001). <i>Winning at New Products: Accelerating the Process from Idea to Launch</i> (3rd ed.). Perseus Publishing.',
            'Chesbrough, H. W. (2003). <i>Open Innovation: The New Imperative for Creating and Profiting from Technology</i>. Harvard Business School Press.',
            'Ries, E. (2011). <i>The Lean Startup: How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses</i>. Crown Business.',
            'Brown, T. (2009). <i>Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation</i>. Harper Business.',
            'Drucker, P. F. (1985). <i>Innovation and Entrepreneurship: Practice and Principles</i>. Harper & Row.',
            'Osterwalder, A., & Pigneur, Y. (2010). <i>Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers</i>. Wiley.'
        ],
        3: [
            'Porter, M. E. (1980). <i>Competitive Strategy: Techniques for Analyzing Industries and Competitors</i>. Free Press.',
            'Porter, M. E. (1985). <i>Competitive Advantage: Creating and Sustaining Superior Performance</i>. Free Press.',
            'Ansoff, H. I. (1957). Strategies for Diversification. <i>Harvard Business Review, 35</i>(5), 113-124.',
            'Kim, W. C., & Mauborgne, R. (2005). <i>Blue Ocean Strategy: How to Create Uncontested Market Space and Make the Competition Irrelevant</i>. Harvard Business School Press.',
            'McFarlan, F. W. (1984). Information Technology Changes the Way You Compete. <i>Harvard Business Review, 62</i>(3), 98-103.',
            'World Intellectual Property Organization (WIPO). (2022). <i>Guía de propiedad intelectual para pymes</i>. WIPO Publications. https://www.wipo.int/sme/',
            'Superintendencia de Industria y Comercio (SIC). (2023). <i>Guía de registro de software y bases de datos</i>. SIC Colombia.'
        ],
        4: [
            'AENOR. (2011). <i>UNE 166006:2011 EX. Sistemas de gestión de la I+D+i: Requisitos</i>. AENOR Ediciones.',
            'Gartner. (2024). <i>Hype Cycle for Emerging Technologies</i>. Gartner Research. https://www.gartner.com/en/newsroom/press-releases',
            'European Patent Office (EPO). (2023). <i>Guía de búsqueda de patentes en Espacenet</i>. EPO Publications. https://www.epo.org/searching/',
            'Google Patents. (2024). <i>Documentación de búsqueda avanzada</i>. https://patents.google.com/',
            'SCIP. (2023). <i>Code of Ethics for Competitive Intelligence Professionals</i>. Strategic and Competitive Intelligence Professionals. https://www.scip.org/',
            'Porter, M. E., & Millar, V. E. (1985). How Information Gives You Competitive Advantage. <i>Harvard Business Review, 63</i>(4), 149-160.',
            'López Fernández, M. C., & Sánchez Chillón, B. (2015). <i>Vigilancia tecnológica e inteligencia competitiva: Herramientas para la competitividad</i>. Editorial UOC.'
        ]
    }
};
