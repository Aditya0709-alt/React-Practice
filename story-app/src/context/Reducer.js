export default (state,action) => {
    switch(action.type){
        case 'CREATE_STORY':
            return{
                ...state,
                story: [...state.story, action.payload]
            };
        
        case 'EDIT_STORY':
            const editingStory = action.payload;
            const updatedStory = state.story.map(story=>{
                if(story.id === editingStory.id){
                    return editingStory;
                }
                return story;
            });
            return{
                ...state,
                story: updatedStory
            }

            case 'DELETE_STORY':
                return { 
                    ...state,
                    story: state.story.filter(story => story.id !== action.payload)
                };

            default: return state;
    }
} 