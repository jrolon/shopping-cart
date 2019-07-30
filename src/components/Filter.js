import React, { Component } from 'react'

export default class Filter extends Component {
    render(){
        return (
            <div className="row">
            <div className="col-md-4">
            {this.props.count} Productos Encontrados

  
            
            </div>
            <div className="col-md-4">
                <label>
                    Ordenar Por Precio
                    <select className="form-control" value={this.props.sort}
                    onChange={this.props.handleChangeSort}>
                    <option value="">Seleccionar</option>
                    <option value="menor">Mayor a Menor</option>
                    <option value="mayor">Menor a Mayor</option>

                    </select>
                </label>
            
            </div>
            <div className="col-md-4"></div>
            <label>
                    Categoría de Vinos
                    <select className="form-control" value={this.props.size}
                    onChange={this.props.handleChangeSize}>
                    <option value="">Todos</option>
                    <option value="t">Vinos Tintos</option>
                    <option value="b">Vinos Blancos</option>
                    </select>

                    
                </label>
            </div>

            
            
        )
    }
}