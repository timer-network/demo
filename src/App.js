import React, {Component} from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import lanhu_wodebangzhuzhongxin from './view/lanhu_wodebangzhuzhongxin/index.jsx'
import lanhu_daibi from './view/lanhu_daibi/index.jsx'
import lanhu_shezhijiage from './view/lanhu_shezhijiage/index.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/lanhu_wodebangzhuzhongxin" component={lanhu_wodebangzhuzhongxin} />
                        <Route exact path="/lanhu_daibi" component={lanhu_daibi} />
                        <Route exact path="/lanhu_shezhijiage" component={lanhu_shezhijiage} />
                        <Redirect from="/" to="/lanhu_wodebangzhuzhongxin" />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
