function Menu()
{	
	this.init();
}

Menu.prototype = 
{
	container: null,
	
	foregroundColor: null,
	backgroundColor: null,
	
	selector: null,
	save: null,
	undo: null,
	clear: null,
	about: null,
	
	init: function()
	{
		var option, space, separator, color_width = 15, color_height = 15;

		this.container = document.createElement("div");
		this.container.className = 'gui';
		this.container.style.position = 'absolute';
		this.container.style.top = '0px';
		
		this.foregroundColor = document.createElement("canvas");
		this.foregroundColor.style.marginBottom = '-3px';
		this.foregroundColor.style.cursor = 'pointer';
		this.foregroundColor.width = color_width;
		this.foregroundColor.height = color_height;
		this.container.appendChild(this.foregroundColor);
		
		this.setForegroundColor( COLOR );
		
		space = document.createTextNode(" ");
		this.container.appendChild(space);

		this.backgroundColor = document.createElement("canvas");
		this.backgroundColor.style.marginBottom = '-3px';
		this.backgroundColor.style.cursor = 'pointer';
		this.backgroundColor.width = color_width;
		this.backgroundColor.height = color_height;
		this.container.appendChild(this.backgroundColor);

		this.setBackgroundColor( BACKGROUND_COLOR );
		
		space = document.createTextNode(" ");
		this.container.appendChild(space);		
		
		this.selector = document.createElement("select");

		for (i = 0; i < BRUSHES.length; i++)
		{
			option = document.createElement("option");
			option.id = i;
			option.innerHTML = BRUSHES[i].toUpperCase();
			this.selector.appendChild(option);
		}

		this.container.appendChild(this.selector);

		space = document.createTextNode(" ");
		this.container.appendChild(space);
		
		this.save = document.createElement("span"); //getElementById('save');
		this.save.className = 'button';
		this.save.innerHTML = 'Save';
		this.container.appendChild(this.save);
		
		space = document.createTextNode(" ");
		this.container.appendChild(space);
		
		this.clear = document.createElement("Clear");
		this.clear.className = 'button';
		this.clear.innerHTML = 'Clear';
		this.container.appendChild(this.clear);
		
		this.container.appendChild(document.createTextNode(" "));
		this.undo = document.createElement("Undo");
        this.undo.className = 'button';
        this.undo.innerHTML = 'Undo';
        this.container.appendChild(this.undo);
        
        this.container.appendChild(document.createTextNode(" "));
        this.redo = document.createElement("Redo");
        this.redo.className = 'button';
        this.redo.innerHTML = 'Redo';
        this.container.appendChild(this.redo);

		separator = document.createTextNode(" | ");
		this.container.appendChild(separator);

		this.about = document.createElement("About");
		this.about.className = 'button';
		this.about.innerHTML = 'About';
		this.container.appendChild(this.about);
	},
	
	setForegroundColor: function( color )
	{
		var context = this.foregroundColor.getContext("2d");
		context.fillStyle = 'rgb(' + color[0] + ', ' + color[1] +', ' + color[2] + ')';
		context.fillRect(0, 0, this.foregroundColor.width, this.foregroundColor.height);
		context.fillStyle = 'rgba(0, 0, 0, 0.1)';
		context.fillRect(0, 0, this.foregroundColor.width, 1);
	},
	
	setBackgroundColor: function( color )
	{
		var context = this.backgroundColor.getContext("2d");
		context.fillStyle = 'rgb(' + color[0] + ', ' + color[1] +', ' + color[2] + ')';
		context.fillRect(0, 0, this.backgroundColor.width, this.backgroundColor.height);
		context.fillStyle = 'rgba(0, 0, 0, 0.1)';
		context.fillRect(0, 0, this.backgroundColor.width, 1);		
	}
}
