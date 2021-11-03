import { Route, Switch } from 'react-router-dom'
import Home from '../screens/home/Home'


export default function MainContainer() {
    return (
        <div>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}
