
## **GUÍA COMPLETA: CONFIGURACIÓN DE GIT Y GITHUB**

### **PASO 1: INSTALAR GIT**

#### **En macOS (tu sistema):**
```bash
<code_block_to_apply_changes_from>
```

#### **En Windows:**
- Descargar desde: https://git-scm.com/download/win
- Instalar con opciones por defecto

#### **En Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/RHEL
```

---

### **PASO 2: CONFIGURAR GIT POR PRIMERA VEZ**

```bash
# Configurar tu nombre de usuario
git config --global user.name "Tu Nombre Completo"

# Configurar tu email (debe ser el mismo de GitHub)
git config --global user.email "tu.email@ejemplo.com"

# Configurar el editor por defecto (opcional)
git config --global core.editor "code"  # Para VS Code
git config --global core.editor "nano"  # Para nano

# Verificar configuración
git config --list
```

---

### **PASO 3: CREAR UN REPOSITORIO LOCAL**

```bash
# 1. Crear carpeta del proyecto
mkdir mi-proyecto
cd mi-proyecto

# 2. Inicializar repositorio Git
git init

# 3. Verificar estado
git status
```

---

### **PASO 4: CREAR ARCHIVOS Y HACER PRIMER COMMIT**

```bash
# 1. Crear archivo README
echo "# Mi Proyecto JavaScript" > README.md

# 2. Crear archivo principal
touch app.js

# 3. Ver estado actual
git status

# 4. Agregar archivos al área de staging
git add README.md
git add app.js

# O agregar todos los archivos de una vez:
git add .

# 5. Ver qué está en staging
git status

# 6. Hacer primer commit
git commit -m "Primer commit: Inicializar proyecto"

# 7. Ver historial de commits
git log --oneline
```

---

### **PASO 5: CONFIGURAR REPOSITORIO REMOTO EN GITHUB**

#### **5.1 Crear repositorio en GitHub:**
1. Ir a [github.com](https://github.com) y hacer login
2. Click en botón verde "New" o "+" → "New repository"
3. Llenar información:
   - **Repository name:** `mi-proyecto`
   - **Description:** `Proyecto de JavaScript para aprender Git`
   - **Public** o **Private** (elegir según prefieras)
   - **NO marcar** "Add a README file" (ya lo creamos)
   - **NO marcar** "Add .gitignore" (lo haremos después)
4. Click en "Create repository"

#### **5.2 Conectar repositorio local con GitHub:**
```bash
# Agregar el repositorio remoto
git remote add origin <url_repositorio_github_aquí>

# Verificar que se agregó correctamente
git remote -v

# Cambiar nombre de la rama principal (opcional, pero recomendado)
git branch -M main

# Subir código a GitHub
git push -u origin main
```

---

### **PASO 6: FLUJO DE TRABAJO DIARIO**

#### **6.1 Hacer cambios y commits:**
```bash
# 1. Hacer cambios en tus archivos
# 2. Ver qué archivos cambiaron
git status

# 3. Ver diferencias específicas
git diff app.js

# 4. Agregar archivos modificados
git add app.js
# O agregar todos:
git add .

# 5. Hacer commit con mensaje descriptivo
git commit -m "mensaje descriptivo aquí"

# 6. Subir cambios a GitHub
git push
```

#### **6.2 Ver historial y estado:**
```bash
# Ver historial de commits
git log --oneline

# Ver estado actual
git status

# Ver ramas
git branch

# Ver diferencias entre commits
git diff HEAD~1
```

---

### **PASO 7: CREAR Y USAR RAMAS ( OMITIR POR AHORA )**

```bash
# 1. Crear nueva rama
git branch nueva-funcionalidad

# 2. Cambiar a la nueva rama
git checkout nueva-funcionalidad

# O crear y cambiar en un comando:
git checkout -b nueva-funcionalidad

# 3. Hacer cambios y commits en la rama
# ... trabajar en tu código ...

# 4. Subir la rama a GitHub
git push -u origin nueva-funcionalidad

# 5. Volver a la rama principal
git checkout main

# 6. Fusionar la rama (cuando esté lista)
git merge nueva-funcionalidad

# 7. Eliminar rama local (opcional)
git branch -d nueva-funcionalidad
```

---

### **PASO 8: ARCHIVOS IMPORTANTES**

#### **8.1 .gitignore:**
```bash
# Crear archivo .gitignore
touch .gitignore

# Agregar contenido común para JavaScript:
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
echo "dist/" >> .gitignore
echo ".DS_Store" >> .gitignore
```

#### **8.2 package.json (para proyectos Node.js):**
```bash
# Inicializar proyecto Node.js
npm init -y

# Hacer commit del package.json
git add package.json
git commit -m "Agregar package.json para gestión de dependencias"
```

---

### **PASO 9: COMANDOS ÚTILES ADICIONALES**

```bash
# Ver configuración de Git
git config --list

# Ver ayuda de un comando
git help commit

# Deshacer último commit (manteniendo cambios)
git reset --soft HEAD~1

# Deshacer cambios en un archivo específico
git checkout -- app.js

# Ver quién modificó qué línea
git blame app.js

# Crear tag para versión
git tag -a v1.0.0 -m "Versión 1.0.0"
git push origin v1.0.0
```

---

### **PASO 10: RESOLVER PROBLEMAS COMUNES**

#### **10.1 Si olvidaste hacer commit:**
```bash
git add .
git commit -m "Guardar cambios pendientes"
git push
```

#### **10.2 Si hay conflictos al hacer merge:**
```bash
# Git te mostrará archivos con conflictos
# Editar archivos y resolver conflictos manualmente
# Luego:
git add .
git commit -m "Resolver conflictos de merge"
```

#### **10.3 Si quieres descartar cambios locales:**
```bash
git reset --hard HEAD
git clean -fd
```

---

### **RESUMEN DE COMANDOS ESENCIALES:**

```bash
# Configuración inicial
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Repositorio local
git init
git add .
git commit -m "Mensaje descriptivo"
git log --oneline

# Repositorio remoto
git remote add origin https://github.com/usuario/repo.git
git push -u origin main
git push

# Ramas
git branch nombre-rama
git checkout nombre-rama
git merge nombre-rama

# Estado y cambios
git status
git diff
git log
```

---

### **CONSEJOS IMPORTANTES:**

**Haz commits frecuentes** con mensajes descriptivos
**Usa .gitignore** para archivos que no deben versionarse
**Crea ramas** para nuevas funcionalidades
**Haz pull antes de push** si trabajas en equipo
**Usa mensajes de commit claros** que expliquen el "por qué"
