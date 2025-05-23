/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': 'hsl(0, 78%, 62%)',
        'cyan': 'hsl(180, 62%, 55%)',
        'orange': 'hsl(34, 97%, 64%)',
        'blue': 'hsl(212, 86%, 64%)',
        'grey-500': 'hsl(234, 12%, 34%)',
        'grey-400': 'hsl(212, 6%, 44%)',
        'white': 'hsl(0, 0%, 100%)',
      }
    },
    fontSize: {
      'preset-1': ['36px',
        {
          lineHeight: '1.4',
          letterSpacing: '0.25px',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: '600',
        }
      ],
      'preset-2': ['36px',
        {
          lineHeight: '1.4',
          letterSpacing: '0.25px',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: '200',
        }
      ],
      'preset-3': ['22px',
        {
          lineHeight: '1.35',
          letterSpacing: '0',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: '600',
        }
      ],
      'preset-4': ['17px',
        {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: '400',
        }
      ],
      'preset-5': ['15px',
        {
          lineHeight: '1.6',
          letterSpacing: '0',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: '400',
        }
      ],
      'preset-1-mobile': ['26px',
        {
          lineHeight: '1.4',
          letterSpacing: '0.25px',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: '600',
        }
      ],
      'preset-2-mobile': ['26px',
        {
          lineHeight: '1.4',
          letterSpacing: '0.25px',
          fontFamily: ['Poppins', 'sans-serif'],
          fontWeight: '200',
        }
      ],
    }
  },
  plugins: [],
}

