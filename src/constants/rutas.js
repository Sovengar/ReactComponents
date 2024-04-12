import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import App from '../App'
import Login from '../components/login/Login'
import {
  Inici, PestanyesVista, NavegacioBarVista, TaulaNormalVista, TaulaPlegableVista, DataInputVista,
  SaveTextVista, SpinnerVista, ToastVista, FormularioVista
} from '../vistes'

// Rutes de l'aplicació
export const urlsApp = {
  app: '/',
  login: '/login',
  inici: '/inici',
  barraNavegacio: '/barra-navegacio',
  pestanyes: '/pestanyes',
  taulaNormal: '/taulaNormal',
  taulaPlegable: '/taula-plegable',
  dataInput: '/data-input',
  saveText: '/save-text',
  spinner: '/spinner',
  toast: '/toast',
  formulario: '/formulario'
}

const rutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={urlsApp.app} element={<App />}>
      <Route path={urlsApp.inici} element={<Inici />} />
      <Route path={urlsApp.barraNavegacio} element={<NavegacioBarVista />} />
      <Route path={urlsApp.login} element={<Login />} />
      <Route path={urlsApp.pestanyes} element={<PestanyesVista />} />
      <Route path={urlsApp.taulaNormal} element={<TaulaNormalVista />} />
      <Route path={urlsApp.taulaPlegable} element={<TaulaPlegableVista />} />
      <Route path={urlsApp.dataInput} element={<DataInputVista />} />
      <Route path={urlsApp.saveText} element={<SaveTextVista />} />
      <Route path={urlsApp.spinner} element={<SpinnerVista />} />
      <Route path={urlsApp.toast} element={<ToastVista />} />
      <Route path={urlsApp.formulario} element={<FormularioVista />} />
    </Route>
  )
)

export default rutes
