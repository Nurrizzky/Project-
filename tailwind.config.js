import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './node_modules/flowbite/**/*.js'  // Pastikan Flowbite ditambahkan di sini
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                boxShadow: {
                    'inner-2': 'inset 0 4px 6px rgba(0, 0, 0, 0.2)',
                  }
            },
        },
    },

    plugins: [
        forms,
        require('flowbite/plugin')
    ],
};
