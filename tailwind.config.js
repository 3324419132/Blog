/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 大豆橙主题色系
        'accent': '#FF7D00', // 大豆橙 - 主题色
        'accent-light': '#FFB366', 
        'accent-dark': '#CC6400',
        'bg-light': '#FFFAF5', // 浅色背景
        'bg-dark': '#1A1613', // 暗色背景
        'text-light': '#3F3A36', // 浅色模式文本
        'text-dark': '#E8E2DD', // 暗色模式文本
        'gray': {
          50: '#F9F7F6',
          100: '#F0EEEB',
          200: '#E8E2DD',
          300: '#D6CFC9',
          400: '#B2AAA3',
          500: '#8A8178',
          600: '#6F685F',
          700: '#575047',
          800: '#3F3A36',
          900: '#1A1613'
        }
      },
      fontFamily: {
        'sans': ['Noto Sans SC', 'sans-serif'], // 正文字体
        'serif': ['Georgia', 'serif'], // 标题字体
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent-dark'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.gray.900'),
            },
            h4: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.gray.900'),
            },
            blockquote: {
              borderLeftColor: theme('colors.accent'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.accent-light'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            blockquote: {
              borderLeftColor: theme('colors.accent-light'),
              color: theme('colors.gray.300'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class', // 支持暗色模式
} 