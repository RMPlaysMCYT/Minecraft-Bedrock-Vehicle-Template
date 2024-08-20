import {world, system} from '@minecraft/server';

console.log('Simple Car Addon Loaded!')
system.runTimeout(()=>{
    world.sendMessage('Simple Car Was Loaded to your world')
},10);