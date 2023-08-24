import React from "react";
import Card from "./Card";

class App extends React.Component {
    state = {
        robots: [],
        robotName: "",
    }

    componentDidMount() {
        const robots = [
            {
                robotName: "John",
            },
            {
                robotName: "Doe",
            },
            {
                robotName: "MrSmith",
            },
            {
                robotName: "Jek",
            },
            {
                robotName: "Alex",
            },
            {
                robotName: "Martin",
            },
            {
                robotName: "Mario",
            },
            {
                robotName: "Jemmy",
            },
            {
                robotName: "Luis",
            },
            {
                robotName: "Musk",
            },
            {
                robotName: "Bill",
            },
            {
                robotName: "Stew",
            },
            {
                robotName: "Rogers",
            },
            {
                robotName: "Thor",
            },
            {
                robotName: "Charlie",
            },
            {
                robotName: "Tony",
            },
            {
                robotName: "Robert",
            },
            {
                robotName: "Strange",
            },
            {
                robotName: "Dom",
            },
            {
                robotName: "Leonardo",
            },
            {
                robotName: "Jim",
            },
            {
                robotName: "Kerry",
            },
            {
                robotName: "Alisher",
            },
            {
                robotName: "Amin",
            }
        ]

        this.setState({
            robots,
        })
    }

    filterRobots = (e) => {
        this.setState({
            robotName : e.target.value,
        })
    }

    render() {
        const {robots, robotName} = this.state;
        const newRobots = robots.filter((item) => {
            return item.robotName.toLowerCase().includes(robotName.toLowerCase())
        })
        return (
            <div className="bg-blue">
                <div className="header pa3">
                    <div className="">
                        <h1 className="f1 tc" style={{fontFamily: "'Press Start 2P', cursive"}}>Robofriends</h1>
                    </div>
                    <div className="pa3 tc">
                        <form action="#">
                            <input type="text" 
                            name="robotName" 
                            id="robotName"
                            placeholder="Search robots..." 
                            className="input-reset w-30 pa2"
                            value={robotName}
                            onChange={this.filterRobots}/>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mt3 pb3  main">
                    {
                        newRobots.map((item, index) => {
                            return (
                                <Card key={index+1} robotName={item.robotName} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App;