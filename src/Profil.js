import PropTypes from 'prop-types';

function Profil({ utilisateur, largeur, longeur }) {
    return (
        <div>
            <img
                src={utilisateur.photo}
                alt={utilisateur.nom}
                style={{
                    width: `${largeur}px`,
                    height: `${longeur}px`,
                }}
            />
            <p>{utilisateur.nom}</p>
        </div>
    );
}

Profil.propTypes = {
    utilisateur: PropTypes.shape({
        nom: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
    largeur: PropTypes.number,
    longeur: PropTypes.number,
};

Profil.defaultProps = {
    largeur: 200,
    longeur: 100,
};

export default Profil;