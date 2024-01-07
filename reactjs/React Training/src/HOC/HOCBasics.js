const Greet = ({name,style}) =>{
    return <h1 style={style}>Hello {name}</h1>
};

function HigherOrderComponent(BaseComponent)
{
    return function EnhancedComponent(){
        const divStyle={
            color:'blue'
        };

        return(
            <div>
                <h1>Hi I am </h1>
                <BaseComponent style={divStyle} name = "I am higher order componnent"/>
                {/* <Greet style={divStyle}name="I M Higher Order Component"/> */}
            </div>
        )
    };
}

export const MyHOC = HigherOrderComponent(Greet);
