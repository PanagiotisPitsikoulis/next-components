import plugin from 'tailwindcss/plugin'
export default plugin(
    function () { },
    {
        theme: {
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
        }
        }
        )