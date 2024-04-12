import { saveAs } from 'file-saver'
/* import { Blob } from 'buffer' */

/* Componentes MUI */
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'

export default function SaveText (props) {
  const { nomFitxer, textBtn, colorBtn, sizeBtn, extensioFitxer, ...altres } = props

  const createFile = () => {
    const text = new Blob([props.dades], { type: 'text/plain;charset=utf-8' })
    saveAs(text, `${nomFitxer}.${extensioFitxer}`)
  }

  return (
    <div className='box-btn-savetext'>
      <Button
        variant='contained'
        startIcon={<DownloadIcon />}
        onClick={createFile}
        disabled={props.dades === null}
        color={!colorBtn ? 'primary' : colorBtn}
        size={!sizeBtn ? 'small' : sizeBtn}
        className='btn-download'
        {...altres}
      >
        {textBtn}
      </Button>
    </div>
  )
}
