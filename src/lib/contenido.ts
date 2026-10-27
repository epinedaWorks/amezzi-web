// Todo el texto de las líneas de servicio vive aquí para que las páginas
// solo se encarguen del diseño.

export type Linea = {
  slug: string;
  numero: string;
  nombre: string;
  resumen: string;
  icono: "capacitacion" | "consultoria" | "desarrollo" | "soluciones";
};

export const LINEAS: Linea[] = [
  {
    slug: "capacitaciones",
    numero: "01",
    nombre: "Capacitaciones empresariales",
    resumen:
      "Programas prácticos en Python, AWS, Power BI, Office 365 y Excel empresarial, diseñados según el nivel y los objetivos de cada equipo.",
    icono: "capacitacion",
  },
  {
    slug: "consultoria",
    numero: "02",
    nombre: "Consultoría y asesoría tecnológica",
    resumen:
      "Arquitectura e infraestructura en AWS y desarrollo de modelos de inteligencia artificial propios con Python.",
    icono: "consultoria",
  },
  {
    slug: "desarrollo",
    numero: "03",
    nombre: "Desarrollo de software a la medida",
    resumen:
      "Aplicaciones web, automatizaciones e integraciones construidas alrededor de los procesos reales de su organización.",
    icono: "desarrollo",
  },
  {
    slug: "soluciones",
    numero: "04",
    nombre: "Soluciones de software",
    resumen:
      "Herramientas listas para implementar: asistencia con QR, reconocimiento facial y Reu-X, minutas de reuniones con inteligencia artificial.",
    icono: "soluciones",
  },
];

export const CURSOS = [
  {
    nombre: "Python",
    descripcion:
      "Desde fundamentos hasta análisis de datos, dashboards y modelos de IA con los datos de su empresa.",
    temas: [
      "Fundamentos y automatización de procesos",
      "Interpretación de datos y dashboards",
      "Modelos de IA con datos propios",
      "Colab, Jupyter, Databricks, Marimo y GitLab",
    ],
  },
  {
    nombre: "Amazon Web Services",
    descripcion:
      "Conceptos de nube y servicios esenciales para que los equipos técnicos diseñen, desplieguen y operen con seguridad.",
    temas: ["Cómputo, almacenamiento y redes", "Identidad y seguridad (IAM)", "Arquitecturas serverless", "Control de costos"],
  },
  {
    nombre: "Power BI",
    descripcion:
      "Del dato crudo al tablero ejecutivo: modelado, DAX y visualizaciones que apoyan la toma de decisiones.",
    temas: ["Conexión y limpieza de datos", "Modelado y DAX", "Tableros por departamento", "Publicación y seguridad"],
  },
  {
    nombre: "Office 365 y Excel empresarial",
    descripcion:
      "Excel aplicado a la gestión del negocio, junto con Teams, SharePoint y Power Automate para la productividad y la colaboración diaria.",
    temas: [
      "Excel empresarial: fórmulas, tablas dinámicas y reportes",
      "Power Query y automatización en Excel",
      "Teams y SharePoint",
      "Power Automate",
    ],
  },
];

export type Especialidad = {
  id: string;
  sello: string;
  nombre: string;
  lema: string;
  texto: string;
  servicios: { titulo: string; texto: string }[];
  herramientas?: string[];
};

export const ESPECIALIDADES: Especialidad[] = [
  {
    id: "python",
    sello: "Py",
    nombre: "Python",
    lema: "Datos e inteligencia artificial",
    texto: "Convertimos los datos de su empresa en conocimiento, indicadores y modelos que trabajan para usted.",
    servicios: [
      {
        titulo: "Modelos de IA con sus propios datos",
        texto: "Entrenados con la información de su organización, no con modelos genéricos.",
      },
      {
        titulo: "Interpretación de datos",
        texto: "Análisis exploratorio y estadístico para encontrar patrones y responder preguntas de negocio.",
      },
      {
        titulo: "Dashboards e informes",
        texto: "Tableros interactivos y reportes automatizados que se actualizan solos.",
      },
      {
        titulo: "Entornos de trabajo modernos",
        texto: "Capacitación y configuración de las herramientas con las que su equipo programa y colabora.",
      },
    ],
    herramientas: ["Google Colab", "Jupyter", "GitLab", "Databricks", "Marimo", "Pluto.jl"],
  },
  {
    id: "aws",
    sello: "AWS",
    nombre: "Amazon Web Services",
    lema: "Nube, infraestructura y continuidad",
    texto: "Llevamos sus sistemas a la nube con orden, seguridad y costos bajo control, y le acompañamos después.",
    servicios: [
      { titulo: "Migración a la nube", texto: "Planificación y traslado de servidores y aplicaciones a AWS." },
      { titulo: "Infraestructura como código", texto: "Entornos reproducibles y versionados con CloudFormation o Terraform." },
      { titulo: "Migración de bases de datos", texto: "Traslado de motores y datos con el mínimo tiempo fuera de servicio." },
      { titulo: "Actualización de sistemas operativos", texto: "Migración a versiones recientes y con soporte vigente." },
      { titulo: "Plan de recuperación ante desastres", texto: "Respaldos, réplicas y procedimientos (DRP) probados." },
      { titulo: "Revisión de facturación", texto: "Análisis del gasto y recomendaciones concretas para reducirlo." },
      { titulo: "IA con servicios de AWS", texto: "Visión, lenguaje y modelos generativos integrados a sus procesos." },
      { titulo: "Soporte técnico y capacitación", texto: "Acompañamiento a su equipo en la operación diaria de la nube." },
    ],
  },
  {
    id: "power-bi",
    sello: "BI",
    nombre: "Power BI",
    lema: "Indicadores para decidir",
    texto: "Cada área con la información que necesita, confiable y actualizada.",
    servicios: [
      {
        titulo: "Tableros a la medida por departamento",
        texto: "Finanzas, ventas, operaciones o recursos humanos, cada uno con sus propios indicadores.",
      },
      {
        titulo: "Configuración e implementación",
        texto: "Conexión a fuentes de datos, actualización programada, áreas de trabajo y permisos por usuario.",
      },
      {
        titulo: "Capacitación en la herramienta",
        texto: "Para que su equipo construya, mantenga y aproveche sus propios reportes.",
      },
    ],
  },
];

export const MODALIDADES = [
  { titulo: "Presencial in-company", texto: "En las instalaciones de su empresa, con ejemplos de su propio entorno." },
  { titulo: "Virtual en vivo", texto: "Sesiones sincrónicas con práctica guiada y grabación para consulta." },
  { titulo: "Programa a la medida", texto: "Contenido, duración y nivel ajustados a un diagnóstico previo del equipo." },
];

export const CONSULTORIA = [
  {
    titulo: "Arquitectura e infraestructura en AWS",
    texto:
      "Diseño de arquitecturas seguras y escalables, migración de cargas a la nube, revisión de seguridad y optimización de costos.",
    puntos: [
      "Diagnóstico de la infraestructura actual",
      "Infraestructura como código",
      "Migración a la nube, de bases de datos y de sistemas operativos",
      "Plan de recuperación ante desastres (DRP)",
      "Revisión de facturación y control de costos",
    ],
  },
  {
    titulo: "Modelos de inteligencia artificial propios",
    texto:
      "No nos limitamos a conectar una API: desarrollamos y entrenamos modelos con Python y con los datos de su organización, para que el conocimiento quede en casa.",
    puntos: [
      "Visión por computadora y clasificación de imágenes",
      "Modelos predictivos sobre datos históricos",
      "Procesamiento de lenguaje y documentos",
      "Despliegue, monitoreo y reentrenamiento",
    ],
  },
  {
    titulo: "Asesoría y acompañamiento",
    texto:
      "Acompañamiento a equipos de TI y dirección para elegir tecnología, priorizar proyectos y reducir riesgos.",
    puntos: [
      "Hojas de ruta tecnológicas",
      "Evaluación de proveedores y herramientas",
      "Buenas prácticas de seguridad",
      "Transferencia de conocimiento al equipo interno",
    ],
  },
];

export const DESARROLLO = [
  { titulo: "Aplicaciones web", texto: "Sistemas internos, portales y paneles administrativos accesibles desde cualquier lugar." },
  { titulo: "Automatización de procesos", texto: "Eliminamos tareas repetitivas: reportes, cargas de datos, notificaciones y flujos de aprobación." },
  { titulo: "Integraciones y APIs", texto: "Conectamos los sistemas que ya usa su empresa para que la información fluya sin captura manual." },
  { titulo: "Datos y tableros", texto: "Bases de datos, procesos ETL y tableros para tener indicadores confiables y a tiempo." },
];

export const PROCESO = [
  { paso: "Diagnóstico", texto: "Entendemos el proceso, los usuarios y las restricciones antes de proponer tecnología." },
  { paso: "Propuesta", texto: "Alcance, tiempos y costos claros, con entregables medibles." },
  { paso: "Construcción", texto: "Entregas iterativas que su equipo puede revisar y probar desde temprano." },
  { paso: "Implementación", texto: "Puesta en producción, capacitación de usuarios y documentación." },
  { paso: "Soporte", texto: "Acompañamiento posterior, mejoras y mantenimiento." },
];

export type Solucion = {
  id: string;
  icono: "qr" | "rostro" | "minuta";
  nombre: string;
  lema?: string;
  descripcion: string;
  casos: { titulo: string; texto: string }[];
  idealPara?: string[];
  nota?: string;
  enlace?: { href: string; texto: string };
};

export const SOLUCIONES: Solucion[] = [
  {
    id: "asistencia-qr",
    icono: "qr",
    nombre: "Registro y conteo de asistencia con QR",
    descripcion:
      "Cada participante o colaborador recibe un código QR único. Al llegar, se escanea desde un teléfono o tableta y la asistencia queda registrada con fecha y hora, sin listas en papel ni captura manual.",
    casos: [
      { titulo: "Eventos y capacitaciones", texto: "Inscripción, envío del QR por correo y control de ingreso en la puerta." },
      { titulo: "Personal y turnos", texto: "Marcaje de entrada y salida por sede, con conteo en tiempo real." },
      { titulo: "Reportes", texto: "Asistencia por persona, fecha o evento, exportable a Excel." },
    ],
  },
  {
    id: "reconocimiento-facial",
    icono: "rostro",
    nombre: "Reconocimiento facial empresarial",
    descripcion:
      "Visión por computadora aplicada a la operación: identifica personas, verifica condiciones y analiza contenido, con resultados explicables que el equipo puede auditar.",
    casos: [
      {
        titulo: "Control de acceso e identificación",
        texto:
          "Detecta personas y reconoce a los empleados registrados para autorizar el ingreso a áreas, dejando bitácora de cada acceso.",
      },
      {
        titulo: "Verificación de insumos y equipo",
        texto:
          "Comprueba que el colaborador porte su equipo requerido — casco, chaleco, mascarilla, gafete — antes de ingresar a la zona de trabajo.",
      },
      {
        titulo: "Moderación de contenido",
        texto:
          "Analiza imágenes que se suben a una plataforma, detecta contenido inapropiado e indica la categoría y el motivo de la alerta.",
      },
    ],
    nota: "Se implementa con el consentimiento de las personas registradas y con políticas de resguardo de datos definidas junto a cada cliente.",
  },
  {
    id: "reux",
    icono: "minuta",
    nombre: "Reu-X: minutas inteligentes de reuniones",
    lema: "De la grabación a la minuta en minutos",
    descripcion:
      "Suba el audio, el video o la transcripción de una reunión y Reu-X entrega una minuta formal lista para compartir, con acuerdos, tareas y responsables. Su equipo deja de tomar notas y de dedicar horas a redactar, y ningún compromiso se pierde.",
    casos: [
      {
        titulo: "Minuta formal completa",
        texto:
          "Participantes, objetivo, resumen ejecutivo, agenda, desarrollo por temas, acuerdos, pendientes y próxima reunión.",
      },
      {
        titulo: "Tareas con responsable y fecha",
        texto: "Cada compromiso queda asignado y visible, listo para darle seguimiento.",
      },
      {
        titulo: "Transcripción con hablantes",
        texto: "Reconoce español e inglés e identifica quién habló, en grabaciones de hasta 4 horas.",
      },
      {
        titulo: "Mapas mentales e infografías",
        texto: "Visuales editables con los temas clave, ideales para presentar resultados a la dirección.",
      },
      {
        titulo: "Listo para compartir",
        texto: "Exporta a Word con el diagrama incluido, a PDF o a Markdown con un clic.",
      },
      {
        titulo: "Control por usuario",
        texto: "Perfiles, límites de uso y bitácora de actividad para administrar el servicio en su empresa.",
      },
    ],
    idealPara: [
      "Juntas directivas",
      "Comités y consejos",
      "Reuniones de proyecto",
      "Sesiones con clientes",
      "Capacitaciones y talleres",
    ],
    nota: "Opera sobre infraestructura de AWS con acceso protegido por usuario; los archivos de audio y video se eliminan automáticamente a los 7 días.",
    enlace: { href: "https://reux.amezzi.tech", texto: "Ingresar a Reu-X" },
  },
];
