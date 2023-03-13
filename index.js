const elements = document.querySelectorAll('.btn')

elements.forEach( element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element']
        if( command == 'insertImage' ) {
            let url = prompt('Image Url')
            document.execCommand(command, false, url)

        }
        else{
            document.execCommand(command, false, null)

        }

    })
})