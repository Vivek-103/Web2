//In React, a component can return a single parent element, but it can contain multiple children within that single parent


//WRONG CODE⬇️
const MyComponent = () => {
    return (
        <h1>Hello</h1>
        <p>World</p> // This line will cause an error
    );
};

//RIGHT CODE⬇️
const MyComponent = () => {
    return (
        <>
            <h1>Hello</h1>
            <p>World</p>
        </>
    );
};
