import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
    const utilisateur = { nom: 'Emma', photo: '/user.png' };
    const courses1 = ['Pommes', 'Bananes', 'Oranges'];
    const courses2 = ['Lait', 'Pain', 'Beurre'];

    return (
        <div>
            <HelloWorld />
            <Greeting prenom="Alice" />
            <Profil utilisateur={utilisateur} largeur={1000} longeur={500}/>

            <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
            <Voiture marque="Peugeot" modele="208" couleur="Bleu" />
            <Voiture marque="Renault" modele="Clio" couleur="Noir" />

            <ListeCourses elements={courses1} />
            <ListeCourses elements={courses2} />
        </div>
    );
}

export default App;