# Vinality 🍇

> **Inteligencia para Activos Vitivinícolas**  
> *Donde los viñedos se encuentran con la blockchain y la IA.*

Elimine la complejidad del desarrollo vitivinícola. **Vinality** combina gestión de proyectos impulsada por IA, una red curada de especialistas del ecosistema vitivinícola y administración segura de activos para viñedos, bodegas e infraestructura productiva.

Nuestra IA analiza planes, presupuestos, contratos y etapas críticas para detectar inconsistencias antes de que se conviertan en sobrecostos, demoras o riesgos operativos en proyectos vitivinícolas.

---

## 🌱 Ecosistema Vinality

Los fondos y activos se administran con total transparencia y solo se liberan o actualizan tras la validación técnica de cada etapa del proyecto.

- **Ejecución automática** de condiciones contractuales y validaciones de hitos basados en datos objetivos, reduciendo disputas y aumentando la confianza entre las partes.
- **Herramientas inteligentes** diseñadas para el desarrollo, expansión y administración de proyectos vitivinícolas.
- **Asistente de IA contextual**: Consulte todo el historial de su activo o proyecto.  
  > *“¿Cuál es nuestro riesgo actual si el sistema de riego se retrasa 20 días?”*  
  Obtenga información instantánea respaldada por datos.
- **Recomendaciones en tiempo real**:  
  > *“La expansión del bloque sur del viñedo está un 11% por debajo del presupuesto. Recomendación: reasignar capital a riego inteligente y eficiencia operativa.”*
- **Red curada de especialistas**: Acceda a ingenieros agrónomos, operadores, expertos en riego, infraestructura, logística y desarrollo de bodegas, validados por datos de desempeño.

🏷️ **Socios del ecosistema**:  
`Andes Vineyard Lab` · `Barrel Precision Group` · `Reserva Infrastructure`

---

## ⚙️ Qué puede hacer Vinality

Vinality no es solo una plataforma de gestión: es un **entorno vivo** que conecta el mundo físico de los viñedos con la tecnología blockchain y la inteligencia artificial.

### 🔗 Conectá tu Wallet (MetaMask)
- Conectá tu cuenta de **MetaMask** para autenticarte y gestionar activos.
- Interactuá con **smart contracts** que administran fondos, hitos y validaciones técnicas.
- Firmá transacciones relacionadas con liberación de pagos, actualización de estados y auditoría de proyectos.

### 📧 Envío de correos a base de datos
- Desde la interfaz, podés **enviar correos electrónicos** que se registran automáticamente en una **base de datos centralizada**.
- Ideal para:  
  - Reportar incidencias en obra  
  - Aprobar hitos  
  - Solicitar validaciones técnicas  
  - Mantener un historial auditables de comunicaciones

### 🤖 Chat con Bot Inteligente
- Comunicate con un **bot especializado** en vitivinicultura y gestión de proyectos.
- El bot responde dudas sobre:  
  - Riesgos operativos  
  - Presupuesto y cronograma  
  - Validación de hitos  
  - Requisitos técnicos de riego, infraestructura y bodegas
- Todo respaldado por el historial de tu proyecto y datos en tiempo real.

---

## 🚀 Cómo levantar el proyecto

Sigue estos pasos para ejecutar Vinality localmente y comenzar a interactuar con la plataforma:

### 1. Requisitos previos
Asegurate de tener instalados:
- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) instalado en tu navegador
- Una red EVM configurada (ej. Sepolia, Polygon Mumbai, o localhost con Hardhat)

### 2. Clonar el repositorio


### 3. Instalar dependencias
```bash
npm install
# o
yarn install
```

### 4. Configurar variables de entorno
Copian el archivo `.env.example` a `.env` y completá los valores:
```bash
cp .env.example .env
```
Editá `.env` con:
- Tu RPC de red EVM
- Clave privada (solo para desarrollo)
- API del servicio de correo
- Endpoint del bot de IA

### 5. Compilar y desplegar smart contracts (opcional)
```bash
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network sepolia
```

### 6. Levantar la aplicación
```bash
npm run dev
# o
yarn dev
```
La app se abrirá en `http://localhost:3000`.

### 7. Conectar MetaMask e interactuar
- Abrí la app en el navegador.
- Hacé clic en **“Conectar Wallet”** y seleccioná MetaMask.
- Autorizá la conexión y comenzá a:
  - Ver estados de proyecto
  - Enviar correos registrados en DB
  - Chatear con el bot
  - Aprobar hitos y liberar fondos

---

## 🍷 Cultivá y Escalá tu Legado con Vinality

Únete a la lista de espera exclusiva para la plataforma que está redefiniendo cómo se **desarrollan, administran y tokenizan** los activos vitivinícolas.  
Lanzamiento en **cohortes limitadas** para operadores, inversores y socios estratégicos.

---

© 2026 Vinality. **Inteligencia para Activos Vitivinícolas**.  
*Donde cada gota de vino cuenta una historia, y cada hectárea tiene su digital twin.* 🍇🏔️
