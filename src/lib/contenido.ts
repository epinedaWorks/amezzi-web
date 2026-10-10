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
      "Herramientas listas para implementar: control de asistencia con QR y reconocimiento facial aplicado a la empresa.",
    icono: "soluciones",
  },
];

export const CURSOS = [
  {
    nombre: "Python",
    descripcion:
      "Desde fundamentos hasta automatización de tareas, análisis de datos con pandas y primeros pasos en machine learning.",
    temas: ["Fundamentos y buenas prácticas", "Automatización de procesos", "Análisis de datos", "Introducción a IA"],
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
    temas: ["Conexión y limpieza de datos", "Modelado y DAX", "Tableros e indicadores", "Publicación y seguridad"],
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
      "Diseño de arquitectura y redes (VPC, IAM, cifrado)",
      "Migración y puesta en producción",
      "Monitoreo, respaldos y control de costos",
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
  nombre: string;
  descripcion: string;
  casos: { titulo: string; texto: string }[];
};

export const SOLUCIONES: Solucion[] = [
  {
    id: "asistencia-qr",
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
  },
];
