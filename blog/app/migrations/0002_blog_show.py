# Generated by Django 3.0.3 on 2021-07-18 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='show',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]