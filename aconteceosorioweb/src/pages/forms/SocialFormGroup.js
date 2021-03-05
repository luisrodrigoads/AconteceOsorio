import {Field} from 'redux-form'

import styles from '../../styles/FormRegisterUserStyle';

export function SocialFormGroup() {

    const socialFormComponents = [
        {
            label: 'Facebook',
            name: 'facebook',
        },
        {
            label: 'Instagram',
            name: 'instagram',
        },
        {
            label: 'Spotify',
            name: 'spotify',
        },
        {
            label: 'Linkedin',
            name: 'linkedin',
        },
    ];

    return (
        <>
            <h2>Redes Sociais</h2>
            {socialFormComponents.map(comp => {
                return (
                    <div key={comp.name} className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">
                            <label htmlFor={comp.name}>{comp.label}</label>
                        </div>
                        <Field
                            
                            name={comp.name}
                            component='input'
                            type={comp.type ? comp.type : 'text'}
                            autoComplete={comp.autocomplete ? comp.autocomplete : 'off'}
                            className='form-control'
                        />
                    </div>
                );
            })}

        </>
    );

}