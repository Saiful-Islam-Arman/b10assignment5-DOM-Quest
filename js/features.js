document.getElementById('btn-donate-container')
    .addEventListener('click', function(){
        showSectionById('donate-container');
})

// history container
document.getElementById('btn-history-container')
    .addEventListener('click', function(){
        showSectionById('history-container');
})

// blog container
document.getElementById('btn-blog-container')
    .addEventListener('click', function(){
        showSectionById('blog-container');
})

// active color button donate section
document.getElementById('btn-donate-container')
    .addEventListener('click', function(){
        showButtonActiveColor('btn-donate-container')
    })

// active color button history section
document.getElementById('btn-history-container')
    .addEventListener('click', function(){
        showButtonActiveColor('btn-history-container')
    })
