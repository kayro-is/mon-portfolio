const Copyright = () => {
const currentYear = new Date().getFullYear();

return (
    <footer style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#14111d',
        color: 'white',
        fontSize: '1.2rem',
    }}>
        <p>© {currentYear} kayroWeb. Tous droits réservés.</p>

    </footer>
)
 }

export default Copyright;