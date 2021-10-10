import React from 'react'
import classNames from "classnames";
import { Header, DecorationOpen,Title } from './HeaderStyle'



export function HeaderComp({classes,children,...restProps})
{
    return (
        <Header className={classNames(`header`,classes)} {...restProps}>
            {children}
        </Header>
    );
}

HeaderComp.DecorationOpen =  function HeaderDecoration({src,alt,classes,...restProps})
{
    return(
        <DecorationOpen src={src} alt={alt} className={classNames(`headerDecoration`,classes)} {...restProps}/>
    )
}

HeaderComp.Title= function HeaderTitle({classes,children,...restProps})
{
    return(
        <Title>{children}</Title>
    )
}


