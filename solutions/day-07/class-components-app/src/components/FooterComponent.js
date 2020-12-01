import React from 'react';

const footertyles={
    background: 'lightblue',
    padding: '15px 10%'
}

class Footer extends React.Component{

    render(){
      return (
        <footer style={footertyles}>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      )
    }
  }

  export default Footer