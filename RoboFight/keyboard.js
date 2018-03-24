function Keyboard()
{
    this.key_space = new KeyboardKey(32);
    this.key_space_event = true;

    this.Update = function()
    {
        if(this.key_space.isDown && this.key_space_event)
        {
            this.key_space_event = false;
            ShowModal();
        }
        else
        {
            this.key_space_event = true;
        }
    }
}