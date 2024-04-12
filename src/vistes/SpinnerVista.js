
import * as React from 'react'
import Button from '@mui/material/Button'
import CodiBloc from '../components/codiBloc/CodiBloc'
import { SpinnerContext } from '../components/spinner/Spinner'

export default function SpinnerVista () {
  const { augmentarSpinner, disminuirSpinner } = React.useContext(SpinnerContext)

  const exempleAppAmbSpinner = `import Spinner from './components/Spinner/Spinner';

    function App() {
        return (
            <div className="App">
                <ThemeProvider theme={theme} >
                    <Spinner>
                        {/* Resto de componentes de nuestra app */}
                    </Spinner>
                </ThemeProvider>
            </div>
        );
    }`

  const exempleCompUso = `import { SpinnerContext } from '../components/Spinner/Spinner';
    
    export default function SpinnerVista() {
        const { augmentarSpinner, disminuirSpinner } = React.useContext(SpinnerContext);

        const mostrarSpinner = () => {
            augmentarSpinner();
            setTimeout(() => disminuirSpinner(), 4000);
        }

        return <Button variant="outlined" onClick={mostrarSpinner}>Mostrar spinner</Button>;
    }`

  const exemple2Petis = `function peticionesAjax() {
        augmentarSpinner();
        fetch('url1').then((response) => disminuirSpinner())
        augmentarSpinner();
        fetch('url2').then((response) => disminuirSpinner())
    }`

  const mostrarSpinner = () => {
    augmentarSpinner()
    setTimeout(() => disminuirSpinner(), 4000)
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Spinner</h1>
      <Button variant='contained' onClick={mostrarSpinner}>Mostrar spinner</Button>
      <p>Este componente se utiliza por medio de un contexto de react. De esta forma es más sencillo de usar desde cualquier componente.</p>
      <h2>Uso componente</h2>
      <p><strong>App.js o semejante</strong>: Lo primero es englobar nuestra app dentro del componente Spinner. Se recomiendo hacerlo en App.js por comodidad.</p>
      <CodiBloc codi={exempleAppAmbSpinner} />
      <p><strong>Componente</strong>: Una vez ya está el Spinner añadido, desde cualquiera de sus componentes hijos podremos hacer uso del contexto.</p>
      <CodiBloc codi={exempleCompUso} />
      <h2>Funciones devueltas</h2>
      <p><strong>augmentarSpinner</strong>: Se encarga de mostrar el spinner. Aumenta en uno el contador del componente Spinner.</p>
      <p><strong>disminuirSpinner</strong>: Se encarga de esconder el spinner. Resta uno al contador del componente Spinner.</p>
      <p>Se puede usar varias veces seguidas la función 'augmentarSpinner'. Pero siempre tiene que haber un 'disminuirSpinner' por cada 'augmentarSpinner', ya que hasta que este contador no vuelva a 0 el spinner no desaparecerá.</p>
      <p>Esto es útil, por ejemplo, si se necesita hacer dos fetch seguidos.</p>
      <CodiBloc codi={exemple2Petis} />
    </div>
  )
}
