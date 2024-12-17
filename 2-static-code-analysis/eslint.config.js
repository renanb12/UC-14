module.exports = [
    {
        files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
        rules: {
            "prefer-const": "error",
            "no-constant-binary-expression": "error",
            "no-unused-vars": "error", // Variáveis declaradas, mas nunca usadas
            "no-unreachable": "error", // Código morto após um retorno
            "curly": ["error", "all"], // Exige chaves em blocos de if, else, for, while
            "eqeqeq": ["error", "always"], // Exige === e !== no lugar de == e !=
            "semi": ["error", "always"], // Força o uso de ponto e vírgula no final das linhas
            "quotes": ["error", "single"], // Estilo consistente de aspas simples
            "no-console": "error", // Identificar uso de console.log
            "indent": ["error", 2], // Garantir indentação de 2 espaços
            "object-curly-spacing": ["error", "always"], // Espaçamento interno em objetos
            "array-bracket-spacing": ["error", "never"], // Sem espaço interno em arrays
        }
    }
];
