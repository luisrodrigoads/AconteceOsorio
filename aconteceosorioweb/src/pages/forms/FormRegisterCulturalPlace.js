import React, { useState } from 'react'
import {Field, reduxForm} from 'redux-form'
import { useSelector } from 'react-redux'

const FormRegisterCulturalPlace = props => {

    const loading = useSelector(state => state.auth.loading)

    const { handleSubmit,handleImage} = props

    const [files] = useState(props.otherPictures)

    const renderImages = () =>
        files.map((element, index) =>
            <img
                key={ index }
                style={{ 
                    clear: 'both',
                    width: '100px',
                    height: '100px',
                    margin: '0px 5px',
                    marginTop: '-14px',
                    borderRadius: '3px'
                }} 
                src={ URL.createObjectURL(element) } 
                alt="img cultural_place" />)

    const formComponents = [
        {   
            label: 'Razão Social:',
            name: 'companyName',
        },
        {   
            label: 'Nome Fantasia:',
            name: 'fantasyName',
        },
        {   
            label: 'CNPJ:',
            name: 'cnpj',
        },
        {   
            label: 'Pessoa Responsável:',
            name: 'responsiblePerson',
        },
        {   
            label: 'Instituição vinculada:',
            name: 'linkedInstitution',
        },
        {   
            label: 'Telefone:',
            name: 'phone',
        },
        {   
            label: 'Endereço:',
            name: 'address',
        },
        {   
            label: 'Email:',
            name: 'email',
        },
        {   
            label: 'Senha:',
            name: 'password',
            type: 'password'
        },
    ];

    const formCheckComponents = [
        {
            label: 'Cobrança taxa',
            name: 'chargingFee',
        },
        {
            label: 'Possui banheiro',
            name: 'bathroom',
        },
        {
            label: 'Trocador de fraldas',
            name: 'diaperChanger',
        },
        {
            label: 'Acessibilidade à cadeirante',
            name: 'wheelchairAccessibility',
        },
    ];

    return(
        <div class="row  align-items-center justify-content-center ">
            <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    {formComponents.map(comp => {
                        return (
                            <div key={comp.name} class="form-group">
                                <div style={{marginRight:'8px',marginLeft:'2px'}} className="row justify-content-between">   
                                    <label for={comp.name}>{comp.label}</label>
                                    <h5 style={{color:'red'}}>*</h5>
                                </div>
                                
                                <Field
                                    required
                                    name={comp.name}
                                    component='input'
                                    type={comp.type ? comp.type : 'text'}
                                    className='form-control'
                                />
                            </div>
                        );
                    })}
                  
                    
                    <div className="form-group">
                        <div style={{marginRight:'8px',marginLeft:'2px'}} className="row justify-content-between">
                            <label for="userType">Tipo de Usuário:</label>
                            <h5 style={{color:'red'}}>*</h5>
                        </div>
                        <div className="input-group"> 
                            <Field required name="userType" component="select" className="form-control select">
                                <option value="CULTURAL_PLACE" defaultValue >Espaço cultural</option>
                            </Field>
                        </div>
                    </div>

                    {formCheckComponents.map(compCheck => {
                        return(
                            <div key={compCheck.name}>
                                <label style={{marginRight: '20px'}} for={compCheck.name} className="form-check-label">{compCheck.label}</label>
                                <Field name={compCheck.name} component="input" type="checkbox"  />
                                <hr/>
                            </div>           
                        );
                    })}

                    <div className="form-group">
                        <div style={{marginRight:'8px',marginLeft:'2px'}} className="row justify-content-between">
                            <label for="description">Descrição:</label>
                            <h5 style={{color:'red'}}>*</h5>
                        </div>     
                        <div className="input-group"> 
                            <Field required name="description" value="" component="textarea" rows="5"  className="form-control"/>          
                        </div>
                    </div>
                   
                    <div className="row" style={{marginTop: '30px',marginLeft:'0.01px',marginBottom:'20px'}}>
                        { renderImages()}
                    </div>

                    <label 
                        htmlFor="select-pictures"
                        style={{
                            clear: 'both',
                            width: '190px', 
                            height: '50px',
                            margin: '5px',
                            backgroundColor: '#3c8dbc',
                            color: '#fff',
                            border: 'none',
                            // display: 'inline-block',
                            borderRadius: '3px',
                            padding: '10px',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }} >Adicionar imagem</label>

                    <hr/>
                    <h5>Insira imagens do espaço cultural</h5>
                    <input id="select-pictures"
                        type="file" 
                        name="otherPictures" 
                        accept="image/png, image/jpeg" 
                        onChange={ handleImage } 
                        multiple 
                        style={{ display: 'none' }} />

                    <h6 style={{color:'red'}}>Todos os campos marcados com (*) são obrigatórios.</h6>

                    <button  type="submit" class="btn btn-secondary btn-lg btn-block">                       
                            {loading ? 'Carregando':'Cadastrar'}
                    </button>
                </form> 
            </div>
    </div>
    )

}

export default reduxForm({form: 'formRegisterCulturalPlace'})(FormRegisterCulturalPlace)