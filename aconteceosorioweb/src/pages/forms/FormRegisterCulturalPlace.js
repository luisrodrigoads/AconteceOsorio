import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { useSelector } from 'react-redux'

const FormRegisterCulturalPlace = props => {

    const loading = useSelector(state => state.auth.loading)

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
                <form onSubmit={props.handleSubmit}>
                    
                    {formComponents.map(comp => {
                        return (
                            <div key={comp.name} class="form-group">
                                <label for={comp.name}>{comp.label}</label>
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
                        <label for="userType">Tipo de Usuário</label>
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
                        <label for="description">Descrição</label>
                        <div className="input-group"> 
                            <Field required name="description" value="" component="textarea" rows="5"  className="form-control"/>          
                        </div>
                    </div>

                    <button  type="submit" class="btn btn-secondary btn-lg btn-block">                       
                            {loading ? 'Carregando':'Cadastrar'}
                    </button>
                </form> 
            </div>
    </div>
    )

}

export default reduxForm({form: 'formRegisterCulturalPlace'})(FormRegisterCulturalPlace)