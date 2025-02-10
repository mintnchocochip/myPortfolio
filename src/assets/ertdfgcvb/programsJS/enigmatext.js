/**
@author ppmpreetham
@title  Cursor Proximity Character Changer
@desc   Changes characters and colors based on proximity to the cursor with ENIGMA text.
*/

import { sort } from './src/modules/sort.js'

const density = sort('/\MXYZabc!?=-. ', 'Simple Console', false)

export const settings = {
    fps: 60,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontSize: '1em',
    fontWeight: 'lighter'
}

const TAU = Math.PI * 2

export function main(coord, context, cursor, buffer) {
    const t = 0.02
    const m = Math.min(context.cols, context.rows)
    const a = context.metrics.aspect

    const st = {
        x: 2.0 * (coord.x - context.cols / 2) / m * a,
        y: 2.0 * (coord.y - context.rows / 2) / m
    }

    // Cursor's proximity logic
    const cx = (2.0 * (cursor.x - context.cols / 2) / m * a) || 0
    const cy = (2.0 * (cursor.y - context.rows / 2) / m) || 0

    const dx = st.x - cx
    const dy = st.y - cy
	
    const proximity = Math.sqrt(dx * dx + dy * dy)

    const radius = 0.5 // cursor radius

    const c = 1.0 - Math.exp(-5 * Math.abs(proximity - radius))
    const index = Math.floor(c * density.length)

    const charColor = proximity < radius ? 'black' : `rgba(22, 236, 8, 0.05)`
    const backgroundColor = proximity > radius ? `rgba(11, 11, 11, 0)` : 'rgba(22, 236, 8, 0.6)'

    // background goes here
	
    const aFrame = context.frame * 0.1
	
    const frameFactor = Math.floor((1 - Math.cos(aFrame)) * 7.5) + 1
	
	
    const wrapIndex = Math.floor(aFrame / TAU) % 10 + 1
    const i = coord.index % (coord.y * wrapIndex + 1) % (frameFactor % context.cols)
    const backgroundChar = 'ENIGMA'[i]

    return {
        char: backgroundChar,
		
        backgroundColor: backgroundColor,
        color: charColor
    }
}

export function post(context, cursor, buffer) {
    // drawInfo(context, cursor, buffer, {
	
    //     color: 'white', backgroundColor: 'royalblue', shadowStyle: 'gray'
    // })
}
