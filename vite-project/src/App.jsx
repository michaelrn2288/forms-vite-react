import React from 'react'

export default function App () {

    const [formData, setFormData] = React.useState(
        {
            email: '',
            password: '',
            passwordConfirm: '',
            joinedNews: false
        })
    console.log(formData)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData ( prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    
    function handleSubmit (event) {
      event.preventDefault()
      const {password, passwordConfirm, joinedNews} = formData

      if (password === passwordConfirm) {
        console.log('Successfully signed up')
      } else {
        console.log('passwords do not match')
        return
      }
      joinedNews? console.log('Thanks for signing up for our newsletter!') : ''
    }

  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name='email'
                value={formData.email}
                onChange={handleChange}
            />

            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name='password'
                value={formData.password}
                onChange={handleChange}
                
            />

            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name='passwordConfirm'
                value={formData.passwordConfirm}
                onChange={handleChange}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name='joinedNews'
                    checked={formData.joinedNews}
                    onChange={handleChange}
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>

            <button 
                className="form--submit"
            >
                Sign up
            </button>

        </form>
    </div>
  )
}

