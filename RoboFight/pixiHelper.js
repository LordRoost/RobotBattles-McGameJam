//Aliases
var Container = PIXI.Container;
var AutoDetectRenderer = PIXI.autoDetectRenderer;
var Loader = PIXI.loader;
var TextureCache = PIXI.utils.TextureCache;
var PixiSprite = PIXI.Sprite;
var Rectangle = PIXI.Rectangle;

function LoadPictures(pictureNames,setupFunction)
{
  var l = PIXI.loader;
  var i=0;
  for(;i<pictureNames.length;i++)
  {
    l = l.add(pictureNames[i]);
  }

  l.load(setupFunction);
}

function PixiSurface(w,h)
{
  this.stage = new Container(0x000000,true);
  this.renderer = AutoDetectRenderer(w, h, { transparent: true });
  //this.renderer = AutoDetectRenderer(w, h);
  this.deltaTime = 0;
  this.deltaTimePrev = Date.now();
  this.stage.hitArea = new PIXI.Rectangle(0,0,w,h);

  this.Show = function(htmlElement)
  {
    htmlElement.appendChild(this.renderer.view);
  }

  this.Render = function()
  {
    this.renderer.render(this.stage);
  }

  this.AddChild = function(child)
  {
    if(child.class == "Sprite")
    {
      this.stage.addChild(child.sprite);
    }
    else if(child.class == "Text")
    {
      this.stage.addChild(child.text);
    }
    else if(child.class == "SpriteAnimationRow")
    {
      this.stage.addChild(child.sprite.sprite);
    }
    else if(child.class == "AnimationCollection")
    {
      child.AddToPixiSurface(this.stage);
    }
    else if(child.class == "PixiLine")
    {
      this.stage.addChild(child.graphics);
    }
  }

  this.UpdateDeltaTime = function()
  {
    var now = Date.now();
    this.deltaTime = (now - this.deltaTimePrev)/1000;
    this.deltaTimePrev = now;
  }

  this.SetColor = function(color)
  {
    this.renderer.backgroundColor = color;
  }

  this.MouseX = function()
  {
    return this.renderer.plugins.interaction.mouse.global.x;
  }

  this.MouseY = function()
  {
    return this.renderer.plugins.interaction.mouse.global.y;
  }

  this.MouseDownEvent = function(func)
  {
    this.stage.mousedown = func;
  }

  this.MouseMoveEvent = function(func)
  {
    this.stage.mousemove = func;
  }

  this.MouseUpEvent = function(func)
  {
    this.stage.mouseup = func;
  }

  this.PutOnTop = function(child)
  {
    this.stage.removeChild(child);
    this.stage.addChild(child);
  }

  this.Remove = function(child)
  {
    this.stage.removeChild(child);
  }

  this.AutoResize = function(auto)
  {
    this.renderer.autoResize = auto;
  }

  this.Resize = function(w,h)
  {
    this.renderer.resize(w,h);
  }

  this.ResizeToFullScreen = function()
  {
    this.renderer.resize(window.innerWidth, window.innerHeight);
  }

  this.GetWidth = function()
  {
    return this.renderer.width;
  }

  this.GetHeight = function()
  {
    return this.renderer.height;
  }
}

function Texture(path)
{
  /*this.texture = TextureCache[path];*/
  this.texture = new PIXI.Texture.fromImage(path);
  this.texture.baseTexture.mipmap = true;

  this.Frame = function(x,y,width,height)
  {
    this.texture.frame = new Rectangle(x,y,width,height);
  }
}

function Sprite(path)
{
  this.texture = new Texture(path);
  this.sprite = new PixiSprite(this.texture.texture);
  this.class = "Sprite";
  
  this.Frame = function(x,y,width,height)
  {
    this.texture.Frame(x,y,width,height);
  }

  this.SetPosition = function(x,y)
  {
    this.sprite.x = x;
    this.sprite.y = y;
  }

  this.SetPositionY = function(y)
  {
    this.sprite.y = y;
  }

  this.SetPositionX = function(x)
  {
    this.sprite.x = x;
  }

  this.GetPositionX = function()
  {
    return this.sprite.x;
  }

  this.GetPositionY = function()
  {
    return this.sprite.y;
  }

  this.SetPivot = function(x,y)
  {
    this.sprite.pivot.set(x,y);
  }

  this.SetScale = function(x,y)
  {
    this.sprite.scale.x = x;
    this.sprite.scale.y = y;
  }

  this.SetUniformScale = function(scale)
  {
    this.sprite.scale.x = scale;
    this.sprite.scale.y = scale;
  }

  this.SetRotation = function(r)
  {
    this.sprite.rotation = r;
  }

  this.SetRotationDegree = function(d)
  {
    this.sprite.rotation = d*Math.PI/180;
  }

  this.RotateByDegree = function(d)
  {
    this.sprite.rotation += d*Math.PI/180;
  }

  this.Move = function(x,y)
  {
    this.sprite.x += x;
    this.sprite.y += y;
  }

  this.SetWidth = function(width)
  {
    this.sprite.width = width;
  }

  this.SetHeight = function(height)
  {
    this.sprite.height = height;
  }

  this.SetSize = function(w,h)
  {
    this.sprite.width = w;
    this.sprite.height = h;
  }

  this.GetWidth = function()
  {
    return this.texture.texture.baseTexture.realWidth;
  }

  this.GetHeight = function()
  {
    return this.texture.texture.baseTexture.realHeight;
  }

  this.SetAnchor = function(xFraction,yFraction)
  {
    this.sprite.anchor.x = xFraction;
    this.sprite.anchor.y = yFraction;
  }

  this.AddToPixi = function(pixiSurface)
  {
    ps.stage.addChild(this.sprite);
  }

  this.SetVisibility = function(visibility)
  {
    this.sprite.visible = visibility;
  }

  this.SetAlpha = function(aFraction)
  {
    this.sprite.alpha = aFraction;
  }

  this.SetInteractive = function(interactive)
  {
    this.sprite.interactive = interactive;
  }

  this.MouseOverEvent = function(func)
  {
    this.sprite.mouseover = func;
  }

  this.MouseLeaveEvent = function(func)
  {
    this.sprite.mouseout = func;
  }

  this.MouseDownEvent = function(func)
  {
    this.sprite.mousedown = func;
  }

  this.MouseUpEvent = function(func)
  {
    this.sprite.mouseup = func;
  }

  this.MouseClickEvent = function(func)
  {
    this.sprite.click = func;
  }

  this.TouchStartEvent = function(func)
  {
    this.sprite.touchstart = func;
  }

  this.TouchEndEvent = function(func)
  {
    this.sprite.touchend = func;
  }

  this.TapEvent = function(func)
  {
    this.sprite.tap = func;
  }

  this.SetTexture = function(texture)
  {
    this.sprite.texture = texture;
  }

  this.PutOnTop = function(pixiSurface)
  {
    pixiSurface.PutOnTop(this.sprite);
  }
}


function Text(str, style)
{
  this.text = new PIXI.Text(str,style);
  this.class = "Text";

  this.SetStyle = function(style)
  {
    this.text.style = style;
  }

  this.SetPosition = function(x,y)
  {
    this.text.x = x;
    this.text.y = y;
  }

  this.SetPositionX = function(x)
  {
    this.text.x = x;
  }

  this.SetPositionY = function(y)
  {
    this.text.y = y;
  }

  this.SetText = function(str)
  {
    this.text.text = str;
  }

  this.GetText = function()
  {
    return this.text.text;
  }
  
  this.SetFontSize = function(fontSize)
  {
    //example: myText.SetFontSize("bold 20px Arial");

    this.text.style.font = fontSize;
  }

  this.AddToPixi = function(pixiSurface)
  {
    ps.stage.addChild(this.text);
  }

  this.SetAlpha = function(aFraction)
  {
    this.text.alpha = aFraction;
  }

  this.SetVisibility = function(visibility)
  {
    this.text.visible = visibility;
  }

  this.RemoveFromPixi = function(pixiSurface)
  {
    pixiSurface.Remove(this.text);
  }

  this.GetWidth = function()
  {
    return this.text.width;
  }

  this.GetHeight = function()
  {
    return this.text.height;
  }

  this.Move = function(x,y)
  {
    this.text.x += x;
    this.text.y += y;
  }

  this.SetInteractive = function(interactive)
  {
    this.text.interactive = interactive;
  }

  this.MouseOverEvent = function(func)
  {
    this.text.mouseover = func;
  }

  this.MouseLeaveEvent = function(func)
  {
    this.text.mouseout = func;
  }

  this.MouseDownEvent = function(func)
  {
    this.text.mousedown = func;
  }

  this.MouseUpEvent = function(func)
  {
    this.text.mouseup = func;
  }

  this.MouseClickEvent = function(func)
  {
    this.text.click = func;
  }

  this.TouchStartEvent = function(func)
  {
    this.text.touchstart = func;
  }

  this.TouchEndEvent = function(func)
  {
    this.text.touchend = func;
  }

  this.TapEvent = function(func)
  {
    this.text.tap = func;
  }
}

function KeyboardKey(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;

  key.blockKey = false;

  key.BlockKey = function(block)
  {
    key.blockKey = block;
  }

  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }

    if(key.blockKey)
    {
      event.preventDefault();
    }
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }

    if(key.blockKey)
    {
      event.preventDefault();
    }
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

function LoadTexture(path)
{
  if(!(path in Loader.resources))
  {
    Loader.add(path);
  }
}

//set some classes active or not active
//NOTE: all objects here need the function "Update()"
function Addons()
{
  this.head = null;
  this.tail = null;

  this.AddObject = function(classObject)
  {
    if(this.head == null)
    {
      this.head = classObject;
      this.tail = classObject;
      classObject["addonPrevious"] = null;
      classObject["addonNext"] = null;
    }
    else
    {
      classObject["addonPrevious"] = this.tail;
      classObject["addonNext"] = null;
      this.tail.addonNext = classObject;
      this.tail = classObject;
    }
  }

  this.RemoveObject = function(classObject)
  {
    if(classObject.addonPrevious == null)
    {
      this.head = classObject.addonNext;

      if(classObject.addonNext == null)
      {
        this.tail = null;
      }
      else
      {
        classObject.addonNext.addonPrevious = null;
      }
    }
    else
    {
      classObject.addonPrevious.addonNext = classObject.addonNext;
      if(classObject.addonNext != null)
      {
        classObject.addonNext.addonPrevious = classObject.addonPrevious;
      }
    }
  }

  this.Update =  function()
  {
    var pointer = this.head;
    while(pointer != null)
    {
      pointer.Update();
      pointer = pointer.addonNext;
    }
  }
}

function Triggers()
{
  this.listeners = {};

  //"trigger string", object, "name of function"
  this.AddObject = function(stringToListen, listenerObj, functionNameString)
  {
    if(stringToListen in this.listeners)
    {
      this.listeners[stringToListen].push([listenerObj,functionNameString]);
    }
    else
    {
      this.listeners[stringToListen] = [[listenerObj,functionNameString]];
    }
  }

  this.RemoveObject = function(stringToListen, listenerObj)
  {
    var i = 0;
    var searchArray = this.listeners[stringToListen];
    for(i = 0; searchArray.length; i++)
    {
      if(searchArray[i][0] == listenerObj)
      {
        this.listeners[stringToListen].splice(i, 1);
        break;
      }
    }
  }

  this.trigger = function(triggerString, paramToPass)
  {
    var i=0;
    var searchArray = this.listeners[triggerString];
    var obj;
    for(i=0; i<searchArray.length; i++)
    {
      obj = searchArray[i];
      obj[0][obj[1]](paramToPass);
    }
  }
}