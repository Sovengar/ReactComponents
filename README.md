# Linter obligatorio

Es obligatorio el uso del linter. Por defecto está instalado standard, para usarlo correctamente hay que instalar las siguientes extensiones en VS Code:
- Error Lens
- ESLint

Para que nos actualice el formato correctamente al guardar:
1. Ctrl+Shit+P y borrar >
2. Escribir '>Open User Settings (JSON)'
3. Añadir las siguientes líneas al final:
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }