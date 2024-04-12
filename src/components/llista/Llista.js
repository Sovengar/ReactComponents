import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { ListItemButton } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'

function LlistaItem (props) {
  const { element } = props

  const [obert, setObert] = React.useState(false)

  const navigate = useNavigate()

  // const pathname = window.location.pathname;
  // console.log("pah", pathname);

  function LlistaItemNormal () {
    return (
      <ListItemButton selected={element.redireccio === window.location.pathname} onClick={() => { navigate(element.redireccio) }}>
        <ListItemIcon> {element.icona} </ListItemIcon>
        <ListItemText primary={element.nom} />
      </ListItemButton>
    )
  }

  function LlistaItemPlegable () {
    return (
      <>
        <ListItemButton onClick={() => setObert(!obert)}>
          <ListItemIcon> {element.icona} </ListItemIcon>
          <ListItemText primary={element.nom} />
          {obert ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={obert} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {element.subMenu.map((subElement, index) =>
              <ListItemButton key={index} sx={{ pl: 4 }} selected={subElement.redireccio === window.location.pathname} onClick={() => { navigate(subElement.redireccio) }}>
                <ListItemIcon> {subElement.icona} </ListItemIcon>
                <ListItemText primary={subElement.nom} />
              </ListItemButton>
            )}
          </List>
        </Collapse>
      </>
    )
  }

  return element.subMenu ? LlistaItemPlegable() : LlistaItemNormal()
}

export default function Llista (props) {
  const { elements } = props

  const divisor = 'divider'

  return (
    <List>
      {elements.map((element, index) =>
        <div key={index}>
          {(element.nom === divisor) ? <Divider /> : <LlistaItem element={element} />}
        </div>
      )}
      <Divider />
    </List>
  )
}
