import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import Loading from './Loading'
class Episodes extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			loading:true,
			result :[]
		}
	}
	componentDidMount()
	{
		fetch('https://rickandmortyapi.com/api/episode/')
		.then(res=>res.json())
		.then(res=>{
			console.log(res)
			this.setState({result:res.results,loading:false})
		})
	}

	render()
	{
		if(this.state.loading)
        {
            return <Loading/>
        }
        return (
            <div className="content">
            <h1><i><b>Episodes</b></i></h1>
            <hr/>
            <div className="row">
            {
                this.state.result.map((key)=>{
                    return (
                    
                    <div className="border col-3">
                    <Link style={{textDecoration:"none",color:"black"}} to={"/episode/"+key.id}>
                      <div className="type">{key.air_date}</div>
                        <div className="name "> {key.name}</div>
                        <div className="residents">{key.characters.length}</div>
                        
                        </Link>
                        </div>
                    )
                })
            }
            </div>
            </div>
        )
	}
}

export default Episodes