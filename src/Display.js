import React from "react";
import PropTypes from 'prop-types';

const Display = (props) => {
    console.log(props);
    const { firstName, age, designation, strOrNum, arrOfObject, arrOfNum, emails } = props; //destructuring of objects

    return (
        <>
            <p>{firstName}</p>
            <p>{age}</p>
            <p>{designation}</p>
            <p>{strOrNum}</p>
            <p>{arrOfObject.map(info => {
                return (
                    <div key={info.id} style={{ color: "pink", fontSize: "20px" }}>
                        {info.name}
                    </div>
                )
            })}</p>
            <p>{emails}</p>
        </>
    )
}

//custom prop validation
const isEmail = (props, propName, componentName) => {
    console.log('props ' + props);
    console.log('propName ' + propName);
    console.log('component ' + componentName);

    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //on string 
    //to use regex (use test)
    // regex.test('admin@gmail.com');//true or false

    if (!regex.test(props[propName])) {
        return Error('Invalid Email');
    }
}

//datatype of prop value(expected)
Display.propTypes = {
    firstName: PropTypes.string,
    age: PropTypes.number,
    designation: PropTypes.string.isRequired,
    strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    arrOfNum: PropTypes.arrayOf(PropTypes.number).isRequired,
    arrOfObject: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })),
    emails: isEmail
}

Display.defaultProps = {
    firstName: 'alex',
    age: 20,
    designation: 'testing',
    strOrNum: 20,
    arrOfNum: [90, 89, 89],
    arrOfObject: [{
        name: 'harry',
        id: 1
    },
    {
        name: 'john',
        id: 2
    }, {
        name: 'alex',
        id: 3
    }],
    emails: 'geco@gmail.com'
}



export default Display;

//regex: regular expression
//https://ihateregex.io/
// to test regex: https://regex101.com/


// [{
//     str: 'val'
// }, {
//     str: 'value'
// }]

// [{
//     table: ['value']
// }, {
//     table: ['val']
// }]

// XOR 
// Flatten the array
