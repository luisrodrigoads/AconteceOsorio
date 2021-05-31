import {Field} from 'redux-form'

import styles from '../../styles/FormRegisterUserStyle';

export function SocialFormGroup() {

    const socialFormComponents = [
        {
            label: 'Facebook',
            name: 'facebook',
            icon: 'images/facebook.png',
        },
        {
            label: 'Instagram',
            name: 'instagram',
            icon: 'images/instagram.png',
        },
        {
            label: 'Spotify',
            name: 'spotify',
            icon: 'images/spotify.png',
        },
        {
            label: 'Linkedin',
            name: 'linkedin',
            icon: 'images/linkedin.png',
        },
        {
            label: 'Youtube',
            name: 'youtube',
            icon: 'images/youtube.png',
        },
        {
            label: 'Outro Link',
            name: 'otherLink',
            icon: 'images/otherLink.png',
        },
    ];

    return (
        <>
            <h2>Redes Sociais</h2>
            {socialFormComponents.map(comp => {
                return (
                    <div key={comp.name} className="form-group">
                        <div style={styles.labelInputDiv} className="row ">
                            <div>
                                <img style={styles.socialMediaIconForm} src={comp.icon} alt={comp.label} title={comp.label}/>
                            </div>
                            <div className="col-10 col-lg-11 col-md-11 col-sm-11">
                                <Field  
                                name={comp.name}
                                component='input'
                                type={comp.type ? comp.type : 'text'}
                                autoComplete={comp.autocomplete ? comp.autocomplete : 'off'}
                                className='form-control'
                                />
                            </div>
                            
                        </div>
                        
                    </div>
                );
            })}

        </>
    );

}