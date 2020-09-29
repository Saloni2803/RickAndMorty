import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Loading from './Loading'
class Character extends Component
{
	constructor()
	{
		super()
		this.state = {
			result : [],
			loading:true
		}
	}
	componentDidMount()
	{
		fetch('https://rickandmortyapi.com/api/character/')
		.then(res=>res.json())
		.then(res=>{
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
            <h1><i><b>Characters</b></i></h1>
            <hr/>
            <div className="row">
            {
                this.state.result.map((key)=>{
                    return (
                    
                    <div className="border col-3">
                    <Link style={{textDecoration:"none",color:"black"}} to={"/character/"+key.id}>
                      <div className="type">{key.gender}</div>
                        <div className="name "> {key.name}</div>
                        <div className="residents">{key.episode.length}</div>
                        
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
export default Character