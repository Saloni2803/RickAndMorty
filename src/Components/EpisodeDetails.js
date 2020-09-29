import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import Loading from './Loading'
class EpisodeDetails extends Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			loading:true,
			character : [],
			result:[]
		}
	}
	componentDidMount()
	{
		console.log(this.props)
		fetch(`https://rickandmortyapi.com/api/episode/${this.props.match.params.id}`)
		.then(res=>res.json())
		.then(res=>{
			console.log(res);
			for(var i=0;i<res.characters.length;i++)
            {
                this.getCharacter(res.characters[i]);
            }
			this.setState({result:res,loading:false});
		})
	}
	getCharacter = (val)=>{
		fetch(val)
        .then(res=> res.json())
        .then(res=>{
            let character = this.state.character;
            character.push(res)
            console.log(character)
            this.setState({character:character});
        })
	}
	render()
	{
		if(this.state.loading)
        {
            return <Loading/>
        }
        return <div className="content">
            {<div>
                <h1><b><i>Episode - {this.state.result.name}</i></b></h1>
                <hr/>
                <ul type="none">
                    <li><b>Episode Number : </b>{this.state.result.episode}</li>
                    <li><b>Air Date : </b>{this.state.result.air_date}</li>
                    <li><b>Created : </b>{this.state.result.created}</li>
                </ul>
                <br></br>
                <b>Characters</b>
                <ol>
                	{
                		this.state.character.map((val,index)=>{
                			return <li><Link to={"/character/"+val.id}>{val.name}</Link></li>
                		})
                	}
                </ol>
            </div>
            }
            </div>
	}
}
export default EpisodeDetails