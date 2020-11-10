import React , { useContext }from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext }  from '../contexts/ThemeContext';

// export default function ThemeToggle() {
//     return (
//         <AuthContext.Consumer>{(authContext) => (
//             <ThemeContext.Consumer>{(themeContext) => 
//                 {
//                             const { toggleTheme } = themeContext;
//                             const { isAuthenticated, toggleAuth } = authContext;
//                             return(
//                              <div>
//                                  <p>Logeado: {isAuthenticated? 'true': 'false'}</p>
//                                  <button onClick={() => toggleTheme()}>Toggle the theme</button>{' '}
//                                  <button onClick={() => toggleAuth()}>Toggle Auth</button>
//                              </div>
//                             )
//                         }
//                     }
//                 </ThemeContext.Consumer>
//                 )
//             }
//         </AuthContext.Consumer>
      
//     )
// }


export default function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    return (
        <div>
            <p>Logeado: {isAuthenticated? 'true': 'false'}</p>
            <button onClick={() => toggleTheme()}>Toggle the theme</button>{' '}
            <button onClick={() => toggleAuth()}>Toggle Auth</button>
        </div>
    )
}
