
import * as React from 'react'
import Button from '@mui/material/Button'
import CodiBloc from '../components/codiBloc/CodiBloc'
import { ToastContext, tipusToast } from '../components/toast/Toast'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

export default function ToastVista () {
  const { nouToast } = React.useContext(ToastContext)

  const exempleAppAmbToast = `import Toast from './components/Toast/Toast';

    function App() {
        return (
            <div className="App">
                <ThemeProvider theme={theme} >
                    <Toast>
                        {/* Resto de componentes de nuestra app */}
                    </Toast>
                </ThemeProvider>
            </div>
        );
    }`

  const exempleCompUso = `import { ToastContext, tipusToast } from '../components/Toast/Toast';
    
    export default function ToastVista() {
        const { nouToast } = React.useContext(ToastContext);

        const mostrarToast = (text, tipus) => () => nouToast(text, tipus);

        return <Button variant="outlined" onClick={mostrarToast("Toast de error", tipusToast.error)}>Toast error</Button>;
    }`

  const mostrarToast = (text, tipus) => () => nouToast(text, tipus)

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Toast</h1>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item>
          <Button variant='contained' onClick={mostrarToast('Toast de error', tipusToast.error)}>Toast error</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={mostrarToast('Toast de warning', tipusToast.avis)}>Toast warning</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={mostrarToast('Toast de success', tipusToast.exit)}>Toast success</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={mostrarToast('Toast de info', tipusToast.info)}>Toast info</Button>
        </Grid>
      </Grid>
      <p>Este componente se utiliza por medio de un contexto de react. De esta forma es más sencillo de usar desde cualquier componente.</p>
      <h2>Librerías utilizadas:</h2>
      <p>React toastify: npm install react-toastify</p>
      <h2>Uso componente</h2>
      <p><strong>App.js o semejante</strong>: Lo primero es englobar nuestra app dentro del componente Toast. Se recomiendo hacerlo en App.js por comodidad.</p>
      <CodiBloc codi={exempleAppAmbToast} />
      <p><strong>Componente</strong>: Una vez ya está el Spinner añadido, desde cualquiera de sus componentes hijos podremos hacer uso del contexto.</p>
      <CodiBloc codi={exempleCompUso} />
      <h2>Función devuelta</h2>
      <p><strong>nouToast</strong>: Función que recibe dos parámetros. El texto a mostrar en el toast y el tipo de toast que se quiere utilizar.</p>
      <h2>Editar los estilos del toast</h2>
      <p>Los estilos básicos del toast se pueden editar de forma sencilla. Para más información se puede acceder a la documentación oficial: <Link target='_blank' rel='noopener noreferrer' href='https://fkhadra.github.io/react-toastify/introduction'>https://fkhadra.github.io/react-toastify/introduction</Link></p>
    </div>
  )
}
