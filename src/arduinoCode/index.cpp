
int port = 10;
void setup()
{

  pinMode(port, OUTPUT);
  Serial.begin(9600);
}

void loop()
{

  if (Serial.available())
  {
    switch (Serial.read())
    {
    case 'ON':
    {
      analogWrite(port, 255);
    }
    break;
    case 'OFF':
    {
      analogWrite(port, 0);
    }
    break;

    case 'TEST':
    {
      analogWrite(port, 80);
    }
    break;
    }
  }
}
