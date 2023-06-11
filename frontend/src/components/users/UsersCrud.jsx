import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/Main';

const headerProps = {
    icon:'users',
    title:'Usuários',
    subtitle: 'Cadastro de Usuários: incluir,Listar,Alterar e Excluir'
};

/* conversa com backend */
const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name:'',email:''},
    list: []
}
export default class UserCrud extends Component{

    state = {...initialState}

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })
    }

     // Save / Clear
    clear(){
        /*  vai limpar o formulario */
        this.setState({user:initialState.user})
    }

    /*  metodo salva */
  save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdtList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    //metodo que recebe a lista local
    getUpdtList(user,add=true){
        const list = this.state.list.filter(
            //vai filtrar a lista de usuarios que tenha id diferente
             // eslint-disable-next-line no-self-compare, eqeqeq
             u => u.id != user.id);
             if(add) list.unshift(user) // <- vai adiciona no inicio do array
              return list
    };

    /* method para atualizar E-mail / nome */
    updatedField(event){
        /* vai alterar o clone do estado */
        const user = { ...this.state.user };
        /* vai procurar dentro do estado  e vai pega valor do evento */
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    /* method  renderizar formulario */
    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    {/* Campo Name */}
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label> Nome</label>
                        <input
                         type="text" 
                         className="form-control" 
                        name="name"
                        value={this.state.user.name}
                        onChange={e => this.updatedField(e)}
                        placeholder="digite o seu Nome..."
                        />
                    </div>
                </div>
                {/* campo E-mail */}
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="email"
                        value={this.state.user.email}
                        onChange={e => this.updatedField(e)}
                        placeholder="Digite seu E-mail.."
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button 
                className="btn btn-primary"
                onClick={e => this.save(e)} // faz com que evento salve
                >
                    salvar
                </button>
                <button 
                className="btn btn-secondary ml-2"
                onClick={e => this.clear(e)} // faz com que evento limpe/pare
                >
                    Cancelar    
                </button>   
            </div>
            </div>
         </div>

            )
        }

        load(user){
            this.setState({user});
        }

        remove(user){
            axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
                 const list = this.getUpdtList(user, false)
                   this.setState({list})
            })
        }

        renderTable(){
            return (
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>ID:</th>
                            <th>Nome:</th>
                            <th>E-mail:</th>
                            <th>Ações:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            )
        }
        // renderizar linhas 
        renderRows(){
            return this.state.list.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-warning"
                            onClick={()=> this.load(user)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        }
    render(){
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}