import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Gif } from './Gif';

export class GifList extends Component {
  static propTypes = {
    gifs: propTypes.array
  }

  render () {
    const { gifs } = this.props
    return (
      <div className='GifsList'>
        {
          gifs.map(gif => {
            return (
              <div key={gif.id} className='GifsList-item'>
                <Gif 
                title={gif.title}
                embed_url={gif.embed_url}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}
