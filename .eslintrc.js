module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
        commonjs: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue'],
    rules: {
        'jsx-quotes': [4, 'prefer-double'],
        'no-mixed-spaces-and-tabs': 4,
        quotes: [4, 'single'],
        'max-len': [0, { code: 140 }],
        'space-before-blocks': 4,
        /**
         * @zh 该规则检查您在括号内是否存在空格。
         * @en This rule checks if you have spaces inside the brackets.
         */
        'space-in-parens': 4,
        /**
         * @zh 该规则检查您在操作符周围是否存在空格
         * @en This rule checks if you have spaces around operators.
         */
        'space-infix-ops': 4,
        /**
         * @zh 该规则检查您的 TypeScript 函数是否显式指定了返回类型
         * @en This rule checks if your TypeScript function explicitly specifies a return type.
         */
        '@typescript-eslint/explicit-function-return-type': 0,
        /**
         * @zh 此规则强制使用 camelcase 变量和函数命名约定
         * @en This rule enforces the use of camelcase naming convention for variables and functions
         */
        camelcase: 0,
        /**
         * @zh 规定对象字面量中花括号换行格式的规则
         * @en Rules for formatting curly brace breaks in object literals
         */
        'object-curly-newline': 0,
        /**
         * @zh 用于检查代码中对象或数组字面量末尾是否存在额外的逗号
         * @en  Check for unused extra commas at the end of object or array literals in code
         */
        'comma-dangle': ['error', 'never'],
        /**
         * @zh 用于检查代码没有使用的变量
         * @en Check for unused variable
         */
        'no-unused-vars': 0,
    },
};
