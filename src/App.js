import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

/* Iconos */
import LockOpenIcon from '@mui/icons-material/LockOpen'
import CampaignIcon from '@mui/icons-material/Campaign'
import ClearAllIcon from '@mui/icons-material/ClearAll'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import TabIcon from '@mui/icons-material/Tab'
import TableRows from '@mui/icons-material/TableRows'
import DownloadIcon from '@mui/icons-material/Download'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture'
import NewspaperIcon from '@mui/icons-material/Newspaper'

import Container from '@mui/material/Container'
import NavegacioBar from './components/navegacioBar/NavegacioBar'
import Spinner from './components/spinner/Spinner'
import Toast from './components/toast/Toast'
import { urlsApp } from './constants/rutas'
import { theme } from './constants/estils'

function App () {
  const elementsMenu = [
    {
      nom: 'Inicio',
      icona: <CampaignIcon />,
      redireccio: urlsApp.inici
    }, {
      nom: 'divider'
    }, {
      nom: 'Barra de navegación',
      icona: <ClearAllIcon />,
      redireccio: urlsApp.barraNavegacio
    }, {
      nom: 'Login',
      icona: <LockOpenIcon />,
      redireccio: urlsApp.login
    }, {
      nom: 'Pestanyes',
      icona: <TabIcon />,
      redireccio: urlsApp.pestanyes
    }, {
      nom: 'Taula',
      icona: <TableRows />,
      subMenu: [
        {
          nom: 'Taula normal',
          icona: <TableRows />,
          redireccio: urlsApp.taulaNormal
        },
        {
          nom: 'Taula plegable',
          icona: <TableRows />,
          redireccio: urlsApp.taulaPlegable,
          subMenu: [
            {
              nom: 'Test'
            }
          ]
        }

      ]
    },
    {
      nom: 'DataInput',
      icona: <UploadFileIcon />,
      redireccio: urlsApp.dataInput
    },
    {
      nom: 'SaveText',
      icona: <DownloadIcon />,
      redireccio: urlsApp.saveText
    },
    {
      nom: 'Spinner',
      icona: <RadioButtonUncheckedIcon />,
      redireccio: urlsApp.spinner
    },
    {
      nom: 'Toast',
      icona: <PictureInPictureIcon />,
      redireccio: urlsApp.toast
    }, {
      nom: 'Campos form',
      icona: <NewspaperIcon />,
      redireccio: urlsApp.formulario
    }
  ]

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Spinner>
          <Toast>
            <NavegacioBar elementsMenu={elementsMenu} titol='React components'>
              <Container fixed>
                <Outlet />
                <div style={{ height: 50 }} />
              </Container>
            </NavegacioBar>
          </Toast>
        </Spinner>
      </ThemeProvider>
    </div>
  )
}

export default App
