import React from 'react';
import AddIcon from 'material-ui/svg-icons/content/add';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom'

export default class MainMenu extends React.PureComponent {
  render() {
    return <div>
      <table>
        <tbody>
          <tr>
            <td><MenuIcon/></td>
            <td><Link to="/clients">Clients</Link></td>
            <td><Link to="/clients/new"><AddIcon/></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}